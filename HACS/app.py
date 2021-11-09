from flask import Flask
import requests
import time
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

# insert your IP here
ip_address = "192.168.50.90"
port = "8080"

@app.route('/')
def index():
	return ('hello world')

@app.route('/test/')
def ping_server_0():
	end_timestamp = int(time.time())
	start_timestamp = end_timestamp - 10

	#url = "http://"+ip_address + ":" + port + "/extractbeacon?staff_id=0&start_time="+str(start_timestamp)+"&end_time="+str(end_timestamp)
	url = "http://192.168.50.90:8080/extractbeacon?staff_id=1&start_time=1635812096&end_time=1635898496"
	res = requests.get(url)
	# how to convert json to text (incomplete)
	return (res.text)

# def ping_server_2():
# 	end_timestamp = int(time.time())
# 	start_timestamp = end_timestamp - 10
#
# 	temp_string = "http://"+ip_address+":5000/extractbeacon?staff_id=2&start_time="+str(start_timestamp)+"&end_time="+str(end_timestamp)
# 	r2 = requests.get(temp_string)
# 	print(r2.text)
# 	return (r2.text)


sched_0 = BackgroundScheduler(daemon=True)
sched_0.add_job(ping_server_0,'interval',seconds=10)
sched_0.start()

# sched_2 = BackgroundScheduler(daemon=True)
# sched_2.add_job(ping_server_2,'interval',seconds=10)
# sched_2.start()

app.run(debug=True, host='0.0.0.0')