from logging import Handler
from flask import Flask, request, render_template
from flask.json import jsonify
import json
import time
# for sql db
import pymysql as sql
import datetime

app = Flask(__name__)

# global beacon_list
beacon_list = []

# sql credential
f = open("credentials.txt", "r")
file = []
for line in f:
    line = line.replace('\n', '')
    file.append(line)
f.close()

# funcion to open the connectiona nd return the db conn


def opensqlconnection():
    # open sql connection
    mydb = sql.connect(
        host=file[0],
        user=file[1],
        password=file[2],
        database="3102_Flask"
    )

    return mydb


# route for the home page


@app.route('/', methods=['GET', 'POST'])
def index():
    global beacon_list
    if request.method == "GET":
        # creating a cursor for the db
        conn = opensqlconnection()
        mycursor = conn.cursor()
        # SELECT id,sda,MAX(beacon_rssi) as maxr FROM 3102_Flask.Detected_Beacon GROUP BY sda
        # SELECT d.id id, d.sda sda, d.beacon_rssi rssi, d.beacon_mac mac FROM 3102_Flask.temp t, 3102_Flask.Detected_Beacon d WHERE t.maxr = d.beacon_rssi;
        # SELECT d.sda sda, d.rssi rssi, b.mac mac, b.location location FROM 3102_Flask.sdb d, 3102_Flask.Beacon b WHERE d.mac = b.mac;
        mycursor.execute("SELECT * FROM 3102_Flask.loc")

        myresult = mycursor.fetchall()

        mycursor.close()
        conn.close()
        # print(str(myresult))
        # return str(myresult)

        x = datetime.datetime.now()
        print(x)

        context = {
            'results': myresult
        }
        # print(context)
        return render_template('index.html', data=context)

    if request.method == "POST":
        count = 0
        totaltimeforfunction=0
        startimeForFunction = time.time() * 1000
        # print("helloPost")
        data = request.data
        # print(data)
        # Extracting JSON
        # print("--------")
        beacons = json.loads((data).decode("UTF-8"))
        if isinstance(beacons, dict):
            beacon_list = beacons['beacons']
            sda = beacon_list[0]['staff']
            # creating a cursor for the db
            conn = opensqlconnection()
            mycursor = conn.cursor()

            # delete current first
            sql = f"DELETE FROM Detected_Beacon WHERE sda = '{sda}'"
            mycursor.execute(sql)
            conn.commit()
            startimeForFunctionDB = time.time() * 1000
            print("Processing-Start-Time: " + str(startimeForFunctionDB))
           # then add new ones
            for beacon in beacon_list:
                mac = beacon['mac'].replace(':','')
                sql = "INSERT INTO Detected_Beacon (sda, beacon_mac, beacon_rssi) VALUES (%s, %s, %s)"
                val = (beacon['staff'], mac, beacon['rssi'])
                mycursor.execute(sql, val)
                count = count + 1
            endtimeForFunctionDB = time.time() * 1000
            print("Processing-End-Time: " + str(endtimeForFunctionDB))
            processingtimetotal = endtimeForFunctionDB -startimeForFunctionDB
            Avgtotaltimeforfunction = (float(totaltimeforfunction + processingtimetotal)/float(count))
            print("Total-Avg-Processing-Time-Taken: " + str(Avgtotaltimeforfunction) + " milliseconds for total number of " + str(count) + " requests")
            
            
            # endtimeForFunction = time.time() * 1000
            # print("Processing-End-Time: " + str(endtimeForFunction))
            # processingtimeForFunction = (endtimeForFunction - startimeForFunction)
            # Avgtotaltimeforfunction = (float(totaltimeforfunction + processingtimeForFunction)/float(count))
            # print("Total-Avg-Processing-Time-Taken: " + str(Avgtotaltimeforfunction) + " milliseconds for total number of " + str(count) + " requests")

            conn.commit()
            mycursor.close()
            conn.close

        return f"<h1>Request Recieved/h1>"


def handle_request():
    return "Successful Connection"


if __name__ == '__main__':
    app.run(debug=True, host=file[3], port=file[4])
    #app.run(debug=True, host='0.0.0.0', port=8080)