from logging import Handler
from flask import Flask, request, render_template
from flask.json import jsonify
import json
import time
from datetime import datetime

# for sql db
import pymysql as sql
# import datetime

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

# funcion to open the connection and return the db conn


def opensqlconnection():
    # open sql connection
    mydb = sql.connect(
        host=file[0],
        user=file[1],
        password=file[2],
        database="3102_Flask"
    )
    return mydb


# function to get the closest beacon

def sortbeacons(input):
    # initialise the dictionary of beacons
    dbeacons = {}

    # loopint through the array of results
    for row in input:
        # row [1] : SDA
        # row [2] : MAC
        # row [3] : RSSI
        # row [4] : DATETIME
        # print(row)

        # add key into dictionary if not already there
        if str(row[1]) not in dbeacons:
            temp = []
            dbeacons[row[1]] = temp

        # add the result into the corresponding key
        dbeacons[row[1]].append(row)

    # initialise array for output
    output = []
    # loop though all sdas
    for sda in dbeacons:
        # loops though each row fo result to find higest
        highest_rssi = -150
        highest = 0
        for i in range(len(dbeacons[sda])):
            if int(dbeacons[sda][i][3]) > highest_rssi:
                highest_rssi = int(dbeacons[sda][i][3])
                highest = i
        # add the row with the highest rssi to the output
        output.append(dbeacons[sda][highest])

    return output

# route for the home page


@app.route('/', methods=['GET', 'POST'])
def index():
    global beacon_list
    if request.method == "GET":
        # creating a cursor for the db
        conn = opensqlconnection()
        mycursor = conn.cursor()

        # Sql version for the lols, but a bit bugggy
        # SELECT id,sda,MAX(beacon_rssi) as maxr FROM 3102_Flask.Detected_Beacon GROUP BY sda
        # SELECT d.id id, d.sda sda, d.beacon_rssi rssi, d.beacon_mac mac FROM 3102_Flask.temp t, 3102_Flask.Detected_Beacon d WHERE t.maxr = d.beacon_rssi;
        # SELECT d.sda sda, d.rssi rssi, b.mac mac, b.location location FROM 3102_Flask.sdb d, 3102_Flask.Beacon b WHERE d.mac = b.mac;
        # mycursor.execute("SELECT * FROM 3102_Flask.loc")

        query = """SELECT d.id id, d.sda sda, b.mac mac, d.beacon_rssi rssi, d.datetime datetime, b.location location 
                    FROM 3102_Flask.Detected_Beacon d, 3102_Flask.Beacon b 
                    WHERE d.beacon_mac = b.mac"""
        mycursor.execute(query)

        myresult = mycursor.fetchall()
        # print(myresult)

        # close the connection
        mycursor.close()
        conn.close()

        # x = datetime.datetime.now()

        # end_timestamp = int(time.time())
        # start_timestamp = end_timestamp - 10

        # print("start time", start_timestamp, " ", time.strftime(
        #     '%Y-%m-%d %H:%M:%S', time.localtime(start_timestamp)))
        # print("end time", end_timestamp, " ", time.strftime(
        #     '%Y-%m-%d %H:%M:%S', time.localtime(end_timestamp)))

        context = {
            'results': sortbeacons(myresult)
        }
        # print(context)
        return render_template('index.html', data=context)

    if request.method == "POST":
        # Start time for the function
        startimeForFunction = time.time() * 1000
        countForFunction =0
        totaltimeforfunction=0
        print("Processing-Start-Time: " + str(startimeForFunction))

        # get the data from the post requsets
        data = request.data

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
            # conn.commit()

            processingtimetotal = 0
            count = 0
            # then add new ones
            for beacon in beacon_list:
                mac = beacon['mac'].replace(':', '')
                now = datetime.now()
                datetime1 = now.strftime("%Y-%m-%d %H:%M:%S")
                # print("datetime: ", datetime1)
                startimeForinsert = time.time() * 1000
                sql = "INSERT INTO Detected_Beacon (sda, beacon_mac, beacon_rssi, datetime) VALUES (%s, %s, %s, %s)"
                val = (beacon['staff'], mac, beacon['rssi'], str(datetime1))
                mycursor.execute(sql, val)
                count = count + 1
            endtimeForinsert = time.time() * 1000
            # print("Processing-End-Time: " + str(endtimeForinsert))
            processingtimetotal = (endtimeForinsert - startimeForinsert)
            Avgtotaltimeforfunction = (float(totaltimeforfunction + processingtimetotal)/float(count))
            # print("Total-Avg-Processing-Time-Taken: " + str(Avgtotaltimeforfunction) + " milliseconds for total number of " + str(count) + " requests")

            conn.commit()
            mycursor.close()
            conn.close
        
        # endtimeForFunction = time.time() * 1000
        # print("Processing-End-Time: " + str(endtimeForFunction))
        # AvgprocessingtimeForFunction = (float(endtimeForFunction - startimeForFunction)/float(count))
        # print("Total-Processing-Time-Taken: " + str(AvgprocessingtimeForFunction) + " milliseconds for total number of " + str(count) + " requests")
        return f"Request Recieved"


@app.route('/extractbeacon', methods=['GET'])
def extractbeacon():
    sda = request.args.get('staff_id')
    start_time = int(request.args.get('start_time'))
    start_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(start_time))
    end_time = int(request.args.get('end_time'))
    end_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(end_time))
    # print(end_time)
    # print(start_time)
    # connect to db
    conn = opensqlconnection()
    mycursor = conn.cursor()

    # query
    query = "SELECT b.level, b.location, d.datetime, d.beacon_rssi " \
            "FROM 3102_Flask.Detected_Beacon d, 3102_Flask.Beacon b " \
            "WHERE d.beacon_mac = b.mac " \
            "AND d.sda = %s " \
            "AND d.datetime >= %s AND d.datetime <= %s " \
            "ORDER BY d.beacon_rssi DESC LIMIT 1 "

    mycursor.execute(query, (sda, start_time, end_time))
    myresult = format(mycursor.fetchall())

    # close the connection
    mycursor.close()
    conn.close()
    # Return all records
    return jsonify(myresult)

def format(arr):
    newarr = []
    for x in arr:
        obj = {}
        l = list(x)
        obj['level'] = l[0]
        obj['location'] = l[1]
        obj['timestamp'] = l[2]
        newarr.append(obj)
    return newarr

if __name__ == '__main__':
    app.run(debug=True, host=file[3], port=file[4])
    # app.run(debug=True, host='0.0.0.0', port=5000)

