from flask import Flask
import requests
import time
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

# Local
# ip_address = "192.168.50.90"
# AWS
ip_address = "172.31.19.55"
port = "8080"

@app.route('/')
def index():
	return ('hello world')

@app.route('/test/')
def ping_server_0():
	end_timestamp = int(time.time())
	start_timestamp = end_timestamp - 10

	url = "http://"+ip_address + ":" + port + "/extractbeacon?staff_id=003&start_time="+str(start_timestamp)+"&end_time="+str(end_timestamp)
	# url = "http://"+ip_address + ":" + port + "/extractbeacon?staff_id=003&start_time=1635812096&end_time=1635898496"
	r1 = requests.get(url)
	print(r1.text)
	return (r1.text)

def ping_server_2():
	end_timestamp = int(time.time())
	start_timestamp = end_timestamp - 10

	url = "http://"+ip_address + ":" + port + "/extractbeacon?staff_id=009&start_time="+str(start_timestamp)+"&end_time="+str(end_timestamp)
	# url = "http://192.168.50.90:8080/extractbeacon?staff_id=2&start_time=1635812096&end_time=1635898496"
	r2 = requests.get(url)
	print(r2.text)
	return (r2.text)


sched_0 = BackgroundScheduler(daemon=True)
sched_0.add_job(ping_server_0,'interval',seconds=10)
sched_0.start()

sched_2 = BackgroundScheduler(daemon=True)
sched_2.add_job(ping_server_2,'interval',seconds=10)
sched_2.start()

app.run(debug=True, host='0.0.0.0')