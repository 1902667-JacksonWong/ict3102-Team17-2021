FROM python:3.9

ADD . /ict3102-Team17-2021
WORKDIR /ict3102-Team17-2021

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


COPY app.py app.py
COPY templates templates

ENV FLASK_APP=app.py
CMD [ "python", "flask_app/app.py" ]