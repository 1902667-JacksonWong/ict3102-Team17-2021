from logging import Handler
from flask import Flask, request
from flask.json import jsonify
import json

app = Flask(__name__)

# global beacon_list 
beacon_list=[]

@app.route('/', methods=['GET','POST'])
def index():
    global beacon_list
    if request.method == "GET":
        # print("helloGet")
        return str(beacon_list)

    if request.method == "POST":
        # print("helloPost")
        data = request.data
        # print(data)
        #Extracting JSON
        print("--------")
        beacons = json.loads((data).decode("UTF-8"))
        if isinstance(beacons, dict):
            temp = str(beacons['beacons'])
            beacon_list = beacons['beacons']
            print(temp)
            return f"<h1>{temp}</h1>"
        return data
        
    
def handle_request():
    return "Successful Connection"




if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")