package com.moko.beaconx.activity;

import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Message;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.chad.library.adapter.base.BaseQuickAdapter;
import com.moko.beaconx.AppConstants;
import com.moko.beaconx.R;
import com.moko.beaconx.adapter.BeaconXListAdapter;
import com.moko.beaconx.dialog.LoadingDialog;
import com.moko.beaconx.dialog.LoadingMessageDialog;
import com.moko.beaconx.dialog.PasswordDialog;
import com.moko.beaconx.dialog.ScanFilterDialog;
import com.moko.beaconx.entity.BeaconXInfo;
import com.moko.beaconx.utils.BeaconXInfoParseableImpl;
import com.moko.beaconx.utils.ToastUtils;
import com.moko.support.MokoConstants;
import com.moko.support.MokoSupport;
import com.moko.support.OrderTaskAssembler;
import com.moko.support.callback.MokoScanDeviceCallback;
import com.moko.support.entity.DeviceInfo;
import com.moko.support.entity.OrderType;
import com.moko.support.event.ConnectStatusEvent;
import com.moko.support.event.OrderTaskResponseEvent;
import com.moko.support.handler.BaseMessageHandler;
import com.moko.support.log.LogModule;
import com.moko.support.task.OrderTask;
import com.moko.support.task.OrderTaskResponse;
import com.moko.support.utils.MokoUtils;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Timer;
import java.util.TimerTask;

import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;


import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;



public class MainActivity extends BaseActivity implements MokoScanDeviceCallback, BaseQuickAdapter.OnItemChildClickListener {
    private String url = "http://" + "192.168.18.15" + ":" + 5000 + "/";
    private String postBodyString;
    private MediaType mediaType;
    private RequestBody requestBody;
    long [] durations = new long[20];
    int limit = 20;
    int counter = 0;


    @BindView(R.id.iv_refresh)
    ImageView ivRefresh;
    @BindView(R.id.rv_devices)
    RecyclerView rvDevices;
    @BindView(R.id.tv_device_num)
    TextView tvDeviceNum;
    @BindView(R.id.rl_edit_filter)
    RelativeLayout rl_edit_filter;
    @BindView(R.id.rl_filter)
    RelativeLayout rl_filter;
    @BindView(R.id.tv_filter)
    TextView tv_filter;

    private HashMap<String, BeaconXInfo> beaconXInfoHashMap;
    private ArrayList<BeaconXInfo> beaconXInfos;
    private BeaconXListAdapter adapter;

    private String _staff = "000";
    private String _ipaddress = "0.0.0.0:0000";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        beaconXInfoHashMap = new HashMap<>();
        beaconXInfos = new ArrayList<>();
        adapter = new BeaconXListAdapter();
        adapter.replaceData(beaconXInfos);
        adapter.setOnItemChildClickListener(this);
        adapter.openLoadAnimation();
        rvDevices.setLayoutManager(new LinearLayoutManager(this));
        DividerItemDecoration itemDecoration = new DividerItemDecoration(this, DividerItemDecoration.VERTICAL);
        itemDecoration.setDrawable(ContextCompat.getDrawable(this, R.drawable.shape_recycleview_divider));
        rvDevices.addItemDecoration(itemDecoration);
        rvDevices.setAdapter(adapter);
        mHandler = new CunstomHandler(this);
        EventBus.getDefault().register(this);
        IntentFilter filter = new IntentFilter();
        filter.addAction(BluetoothAdapter.ACTION_STATE_CHANGED);
        registerReceiver(mReceiver, filter);
        if (animation == null) {
            startScan();
        }
        Button ipbutton = findViewById(R.id.updatebutton);
        EditText staffidtext = findViewById(R.id.staffid_text);
        EditText iptext = findViewById(R.id.ipaddress_text);


        ipbutton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                _ipaddress = iptext.getText().toString();
                _staff = staffidtext.getText().toString();

                url = "http://" + _ipaddress + "/";

                // Do something in response to button click
                Log.i("ipbu", "this is working");
                Log.i("ipbu",_ipaddress);
            }
        });
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onConnectStatusEvent(ConnectStatusEvent event) {
        String action = event.getAction();
        if (MokoConstants.ACTION_CONN_STATUS_DISCONNECTED.equals(action)) {
            dismissLoadingProgressDialog();
            dismissLoadingMessageDialog();
            ToastUtils.showToast(MainActivity.this, "Disconnected");
            if (animation == null) {
                startScan();
            }
        }
        if (MokoConstants.ACTION_DISCOVER_SUCCESS.equals(action)) {
            dismissLoadingProgressDialog();
            showLoadingMessageDialog();
            ivRefresh.postDelayed(() -> {
                // open password notify and set passwrord
                MokoSupport.getInstance().sendOrder(OrderTaskAssembler.getLockState());
            }, 500);
        }
    }


    private String unLockResponse;

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onOrderTaskResponseEvent(OrderTaskResponseEvent event) {
        final String action = event.getAction();
        if (MokoConstants.ACTION_ORDER_TIMEOUT.equals(action)) {
        }
        if (MokoConstants.ACTION_ORDER_FINISH.equals(action)) {
        }
        if (MokoConstants.ACTION_ORDER_RESULT.equals(action)) {
            OrderTaskResponse response = event.getResponse();
            OrderType orderType = response.orderType;
            int responseType = response.responseType;
            byte[] value = response.responseValue;
            switch (orderType) {
                case lockState:
                    String valueStr = MokoUtils.bytesToHexString(value);
                    if ("00".equals(valueStr)) {
                        if (!TextUtils.isEmpty(unLockResponse)) {
                            dismissLoadingMessageDialog();
                            unLockResponse = "";
                            MokoSupport.getInstance().disConnectBle();
                            ToastUtils.showToast(MainActivity.this, "Password error");
                            if (animation == null) {
                                startScan();
                            }
                        } else {
                            LogModule.i("锁定状态，获取unLock，解锁");
                            MokoSupport.getInstance().sendOrder(OrderTaskAssembler.getUnLock());
                        }
                    } else {
                        dismissLoadingMessageDialog();
                        LogModule.i("解锁成功");
                        unLockResponse = "";
                        mSavedPassword = mPassword;
                        Intent deviceInfoIntent = new Intent(MainActivity.this, DeviceInfoActivity.class);
                        deviceInfoIntent.putExtra(AppConstants.EXTRA_KEY_PASSWORD, mPassword);
                        startActivityForResult(deviceInfoIntent, AppConstants.REQUEST_CODE_DEVICE_INFO);
                    }
                    break;
                case unLock:
                    if (responseType == OrderTask.RESPONSE_TYPE_READ) {
                        unLockResponse = MokoUtils.bytesToHexString(value);
                        LogModule.i("返回的随机数：" + unLockResponse);
                        MokoSupport.getInstance().sendOrder(OrderTaskAssembler.setUnLock(mPassword, value));
                    }
                    if (responseType == OrderTask.RESPONSE_TYPE_WRITE) {
                        MokoSupport.getInstance().sendOrder(OrderTaskAssembler.getLockState());
                    }
                    break;
            }
        }
    }

    private BroadcastReceiver mReceiver = new BroadcastReceiver() {

        @Override
        public void onReceive(Context context, Intent intent) {
            if (intent != null) {
                String action = intent.getAction();
                if (BluetoothAdapter.ACTION_STATE_CHANGED.equals(action)) {
                    int blueState = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, 0);
                    switch (blueState) {
                        case BluetoothAdapter.STATE_TURNING_OFF:
                            if (animation != null) {
                                mHandler.removeMessages(0);
                                MokoSupport.getInstance().stopScanDevice();
                            }
                            break;

                    }
                }
            }
        }
    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK) {
            switch (requestCode) {
                case MokoConstants.REQUEST_CODE_ENABLE_BT:
                case AppConstants.REQUEST_CODE_DEVICE_INFO:
                    if (animation == null) {
                        startScan();
                    }
                    break;
            }
        } else {
            switch (requestCode) {
                case MokoConstants.REQUEST_CODE_ENABLE_BT:
                    // 未打开蓝牙
                    MainActivity.this.finish();
                    break;
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unregisterReceiver(mReceiver);
        EventBus.getDefault().unregister(this);
    }


    @Override
    public void onStartScan() {
        beaconXInfoHashMap.clear();
        new Thread(() -> {
            while (animation != null) {
                runOnUiThread(() -> {
                    adapter.replaceData(beaconXInfos);
                    tvDeviceNum.setText(String.format("DEVICE(%d)", beaconXInfos.size()));
                });
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                updateDevices();
            }
        }).start();

    }

    private BeaconXInfoParseableImpl beaconXInfoParseable;

    @Override
    public void onScanDevice(DeviceInfo deviceInfo) {
        final BeaconXInfo beaconXInfo = beaconXInfoParseable.parseDeviceInfo(deviceInfo);
        if (beaconXInfo == null) {
            return;
        }
        beaconXInfoHashMap.put(beaconXInfo.mac, beaconXInfo);
    }

    @Override
    public void onStopScan() {
        findViewById(R.id.iv_refresh).clearAnimation();
        animation = null;
    }

    @SuppressLint("LongLogTag")
    private void updateDevices() {

//        Log.i("PR2", "--------" );
//        Log.i("PR2", "starttime" );
//        long startime= System.nanoTime();
//
//        Log.i("TimeClass", " Start value in milliseconds "+ startime);

        beaconXInfos.clear();
        if (!TextUtils.isEmpty(filterName) || filterRssi != -127) {
            ArrayList<BeaconXInfo> beaconXInfosFilter = new ArrayList<>(beaconXInfoHashMap.values());
            Iterator<BeaconXInfo> iterator = beaconXInfosFilter.iterator();
            while (iterator.hasNext()) {
                BeaconXInfo beaconXInfo = iterator.next();
                if (beaconXInfo.rssi > filterRssi) {
                    if (TextUtils.isEmpty(filterName)) {
                        continue;
                    } else {
                        if (TextUtils.isEmpty(beaconXInfo.name) && TextUtils.isEmpty(beaconXInfo.mac)) {
                            iterator.remove();
                        } else if (TextUtils.isEmpty(beaconXInfo.name) && beaconXInfo.mac.toLowerCase().replaceAll(":", "").contains(filterName.toLowerCase())) {
                            continue;
                        } else if (TextUtils.isEmpty(beaconXInfo.mac) && beaconXInfo.name.toLowerCase().contains(filterName.toLowerCase())) {
                            continue;
                        } else if (!TextUtils.isEmpty(beaconXInfo.name) && !TextUtils.isEmpty(beaconXInfo.mac) && (beaconXInfo.name.toLowerCase().contains(filterName.toLowerCase()) || beaconXInfo.mac.toLowerCase().replaceAll(":", "").contains(filterName.toLowerCase()))) {
                            continue;
                        } else {
                            iterator.remove();
                        }
                    }
                } else {
                    iterator.remove();
                }
            }
            beaconXInfos.addAll(beaconXInfosFilter);
        } else {
            beaconXInfos.addAll(beaconXInfoHashMap.values());
        }
        Collections.sort(beaconXInfos, new Comparator<BeaconXInfo>() {
            @Override
            public int compare(BeaconXInfo lhs, BeaconXInfo rhs) {
                if (lhs.rssi > rhs.rssi) {
                    return -1;
                } else if (lhs.rssi < rhs.rssi) {
                    return 1;
                }
                return 0;
            }
        });

        JSONArray beacon = new JSONArray();
        for(int i=0; i<beaconXInfos.size(); i++){
            JSONObject beacon1 = new JSONObject();
            try {
                beacon1.put("mac", beaconXInfos.get(i).mac);
                beacon1.put("staff", _staff);
                beacon1.put("rssi", String.valueOf(beaconXInfos.get(i).rssi));

            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            beacon.put(beacon1);
        }
        JSONObject beacons = new JSONObject();

        try {
            beacons.put("beacons", (Object)beacon);
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        Log.i("PR2", "endtime" );

//        try{
//            Thread.sleep(1000);
//
//        } catch (InterruptedException e ){
//            e.printStackTrace();
//        }
//        long endtime= System.nanoTime();
//        Log.i("TimeClass", " End value in milliseconds "+ endtime);
//
//        long duration = endtime - startime;
//        Log.i("TimeClassResults", " Duration value in milliseconds "+ duration);

//        durations[counter] = duration;
//        counter += 1;
//        int total = 0;
//        if(counter == limit){
//            counter = 0;
//            for(int i=0; i<limit; i++){
//                total += duration;
//            }
//            int Result = ((total/limit)/1000);
//            Log.i("TimeClassAverage", "Average processing time per 20 request is " + String.valueOf(Result) + " milliseconds");
//        }

        if (_staff != "000" && _ipaddress != "0.0.0.0:0000") {
            Log.i("sent0", _ipaddress);
            try {
                postRequest(beacons.toString(), url);
                Log.i("sent","sent");
            } catch (Exception e) {
                // TODO Auto-generated catch block
//            e.printStackTrace();
                Log.i("Serverfail", "fail");
            }
        }
    }


    private LoadingDialog mLoadingDialog;

    private void showLoadingProgressDialog() {
        mLoadingDialog = new LoadingDialog();
        mLoadingDialog.show(getSupportFragmentManager());

    }

    private void dismissLoadingProgressDialog() {
        if (mLoadingDialog != null)
            mLoadingDialog.dismissAllowingStateLoss();
    }

    private LoadingMessageDialog mLoadingMessageDialog;

    private void showLoadingMessageDialog() {
        mLoadingMessageDialog = new LoadingMessageDialog();
        mLoadingMessageDialog.setMessage("Verifying..");
        mLoadingMessageDialog.show(getSupportFragmentManager());

    }

    private void dismissLoadingMessageDialog() {
        if (mLoadingMessageDialog != null)
            mLoadingMessageDialog.dismissAllowingStateLoss();
    }

    private Animation animation = null;
    public String filterName;
    public int filterRssi = -127;

    @OnClick({R.id.iv_refresh, R.id.iv_about, R.id.rl_edit_filter, R.id.rl_filter, R.id.iv_filter_delete})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.iv_refresh:
                if (!MokoSupport.getInstance().isBluetoothOpen()) {
                    // 蓝牙未打开，开启蓝牙
                    Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                    startActivityForResult(enableBtIntent, MokoConstants.REQUEST_CODE_ENABLE_BT);
                    return;
                }
                if (animation == null) {
                    startScan();
                } else {
                    mHandler.removeMessages(0);
                    MokoSupport.getInstance().stopScanDevice();
                }
                break;
            case R.id.iv_about:
                startActivity(new Intent(this, AboutActivity.class));
                break;
            case R.id.rl_edit_filter:
            case R.id.rl_filter:
                if (animation != null) {
                    mHandler.removeMessages(0);
                    MokoSupport.getInstance().stopScanDevice();
                }
                ScanFilterDialog scanFilterDialog = new ScanFilterDialog(this);
                scanFilterDialog.setFilterName(filterName);
                scanFilterDialog.setFilterRssi(filterRssi);
                scanFilterDialog.setOnScanFilterListener(new ScanFilterDialog.OnScanFilterListener() {
                    @Override
                    public void onDone(String filterName, int filterRssi) {
                        MainActivity.this.filterName = filterName;
                        MainActivity.this.filterRssi = filterRssi;
                        if (!TextUtils.isEmpty(filterName) || filterRssi != -127) {
                            rl_filter.setVisibility(View.VISIBLE);
                            rl_edit_filter.setVisibility(View.GONE);
                            StringBuilder stringBuilder = new StringBuilder();
                            if (!TextUtils.isEmpty(filterName)) {
                                stringBuilder.append(filterName);
                                stringBuilder.append(";");
                            }
                            if (filterRssi != -127) {
                                stringBuilder.append(String.format("%sdBm", filterRssi + ""));
                                stringBuilder.append(";");
                            }
                            tv_filter.setText(stringBuilder.toString());
                        } else {
                            rl_filter.setVisibility(View.GONE);
                            rl_edit_filter.setVisibility(View.VISIBLE);
                        }
                        if (animation == null) {
                            startScan();
                        }
                    }
                });
                scanFilterDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
                    @Override
                    public void onDismiss(DialogInterface dialog) {
                        if (animation == null) {
                            startScan();
                        }
                    }
                });
                scanFilterDialog.show();
                break;
            case R.id.iv_filter_delete:
                if (animation != null) {
                    mHandler.removeMessages(0);
                    MokoSupport.getInstance().stopScanDevice();
                }
                rl_filter.setVisibility(View.GONE);
                rl_edit_filter.setVisibility(View.VISIBLE);
                filterName = "";
                filterRssi = -127;
                if (animation == null) {
                    startScan();
                }
                break;
        }
    }

    private void startScan() {
        if (!MokoSupport.getInstance().isBluetoothOpen()) {
            // 蓝牙未打开，开启蓝牙
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivityForResult(enableBtIntent, MokoConstants.REQUEST_CODE_ENABLE_BT);
            return;
        }
        animation = AnimationUtils.loadAnimation(this, R.anim.rotate_refresh);
        findViewById(R.id.iv_refresh).startAnimation(animation);
        beaconXInfoParseable = new BeaconXInfoParseableImpl();
        MokoSupport.getInstance().startScanDevice(this);
//        mHandler.postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                MokoSupport.getInstance().stopScanDevice();
//                try{
//                    Thread.sleep(1000);
//
//                } catch (InterruptedException e ){
//                    e.printStackTrace();
//                }
//                startScan();
//            }
//        }, 1000 * 60);
    }

    private String mPassword;
    private String mSavedPassword;

    @Override
    public void onItemChildClick(BaseQuickAdapter adapter, View view, int position) {
        if (!MokoSupport.getInstance().isBluetoothOpen()) {
            // 蓝牙未打开，开启蓝牙
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivityForResult(enableBtIntent, MokoConstants.REQUEST_CODE_ENABLE_BT);
            return;
        }
        BeaconXInfo beaconXInfo = (BeaconXInfo) adapter.getItem(position);
        if (beaconXInfo != null && !isFinishing()) {
            if (animation != null) {
                mHandler.removeMessages(0);
                MokoSupport.getInstance().stopScanDevice();
            }
            final PasswordDialog dialog = new PasswordDialog(this);
            dialog.setData(mSavedPassword);
            dialog.setOnPasswordClicked(new PasswordDialog.PasswordClickListener() {
                @Override
                public void onEnsureClicked(String password) {
                    if (!MokoSupport.getInstance().isBluetoothOpen()) {
                        // 蓝牙未打开，开启蓝牙
                        Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                        startActivityForResult(enableBtIntent, MokoConstants.REQUEST_CODE_ENABLE_BT);
                        return;
                    }
                    LogModule.i(password);
                    mPassword = password;
                    LogModule.i("选中的设备：" + beaconXInfo.mac);
                    MokoSupport.getInstance().connDevice(MainActivity.this, beaconXInfo.mac);
                    showLoadingProgressDialog();
                }

                @Override
                public void onDismiss() {
                    if (animation == null) {
                        startScan();
                    }
                }
            });
            dialog.show();
            Timer timer = new Timer();
            timer.schedule(new TimerTask() {

                @Override
                public void run() {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            dialog.showKeyboard();
                        }
                    });
                }
            }, 200);
        }
    }

    public CunstomHandler mHandler;

    public class CunstomHandler extends BaseMessageHandler<MainActivity> {

        public CunstomHandler(MainActivity activity) {
            super(activity);
        }

        @Override
        protected void handleMessage(MainActivity activity, Message msg) {
        }
    }


    private RequestBody buildRequestBody(String msg) {
        postBodyString = msg;
        mediaType = MediaType.parse("text/plain");
        requestBody = RequestBody.create(postBodyString, mediaType);
        return requestBody;
    }


    private void postRequest(String message, String URL) {
        Log.i("Request", "starttime" );
        long startimeRequest= System.currentTimeMillis();
        Log.i("TimeClassAverage", " Start value in milliseconds "+ startimeRequest);

        RequestBody requestBody = buildRequestBody(message);
        System.out.println(message);
        System.out.println(URL);

        OkHttpClient okHttpClient = new OkHttpClient();

        Request request = new Request
                .Builder()
                .post(requestBody)
                .url(URL)
                .build();
        okHttpClient.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(final Call call, final IOException e) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(MainActivity.this, "Something went wrong:" + " " + e.getMessage(), Toast.LENGTH_SHORT).show();
                        call.cancel();
                    }
                });

            }

            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            Toast.makeText(MainActivity.this, response.body().string(), Toast.LENGTH_LONG).show();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        long endtimerequest = System.currentTimeMillis();
                        Log.i("TimeClassAverage", " End value in milliseconds "+ endtimerequest);
                        long duration = endtimerequest - startimeRequest;
                        Log.i("TimeClassAverage", " Duration value in milliseconds "+ duration);
                        durations[counter] = duration;
                        counter += 1;
                        int total = 0;
                        if(counter == limit){
                            counter = 0;
                            for(int i=0; i<limit; i++){
                                total += duration;
                            }
                            int Result = (total/limit);
                            Log.i("TimeClassAverage", "Average Response time per 20 request is " + String.valueOf(Result) + " milliseconds");
                        }
                    }
                });
            }
        });
    }
}



