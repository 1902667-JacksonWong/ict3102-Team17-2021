from logging import Handler
from flask import Flask, request, render_template
from flask.json import jsonify
import json

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
        
        # initialise the dictionary of beacons
        dbeacons = {}

        # loopint through the array of results
        for row in myresult:
            # row [1] : SDA
            # row [2] : MAC
            # row [3] : RSSI
            # row [4] : DATETIME
            # print(row)
            
            # add key into dictionary if not already there
            if str(row[1]) not in dbeacons:
                temp = []
                dbeacons[row[1]] = temp

            # add the result into the crreesdponding key
            dbeacons[row[1]].append(row)

        # initialise array for output
        output = []
        # loop though all sdas
        for sda in dbeacons:
            # loopo though each row fo result to find higest
            highest_rssi = 0
            highest = 0
            for i in range(len(dbeacons[sda])):
                if int(dbeacons[sda][i][3]) > highest_rssi:
                    highest_rssi = int(dbeacons[sda][i][3])
                    highest = i
            # add the row with the highest rssi to the output
            output.append(dbeacons[sda][highest])

        # close the connection
        mycursor.close()
        conn.close()

        x = datetime.datetime.now()

        context = {
            'results': output
        }
        # print(context)
        return render_template('index.html', data=context)

    if request.method == "POST":
        # print("helloPost")
        data = request.data
        # print(data)
        # Extracting JSON
        print("--------")
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

            # then add new ones
            for beacon in beacon_list:
                mac = beacon['mac'].replace(':','')
                sql = "INSERT INTO Detected_Beacon (sda, beacon_mac, beacon_rssi) VALUES (%s, %s, %s)"
                val = (beacon['staff'], mac, beacon['rssi'])
                mycursor.execute(sql, val)

            conn.commit()
            mycursor.close()
            conn.close

        return f"Request Recieved"


if __name__ == '__main__':
    app.run(debug=True, host=file[3], port=file[4])
    #app.run(debug=True, host='0.0.0.0', port=8080)
