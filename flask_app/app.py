from logging import Handler
from flask import Flask, request
from flask.json import jsonify

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def index():
    if request.method == "GET":
        print("helloGet")
    if request.method == "POST":
        print("helloPost")
        data = request.data
        print(data)
    return "<h1>hello world</h1>"

def handle_request():
    return "Successful Connection"




if __name__ == '__main__':
    app.run(debug=True, host="192.168.18.15")