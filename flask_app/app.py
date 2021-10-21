from logging import Handler
from flask import Flask, request, render_template
from flask.json import jsonify
import json

# for sql db
import pymysql as sql

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
        mycursor.execute("SELECT * FROM Detected_Beacon")

        myresult = mycursor.fetchall()

        mycursor.close()
        conn.close()
        # print(str(myresult))
        # return str(myresult)
        context = {
            'results': myresult
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
                sql = "INSERT INTO Detected_Beacon (sda, beacon_mac, beacon_rssi) VALUES (%s, %s, %s)"
                val = (beacon['staff'], beacon['mac'], beacon['rssi'])
                mycursor.execute(sql, val)

            conn.commit()
            mycursor.close()
            conn.close

        return f"<h1>Hello world</h1>"


def handle_request():
    return "Successful Connection"


if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port="5000")
