from flask import Flask, request, app, session, render_template, jsonify, Response, redirect, url_for, flash, make_response
#from settings import *
import database as db
import json
import utils

app = Flask(__name__, static_url_path='')
app.debug=True


@app.route('/',methods=['GET'])
def index():
    return make_response(open('templates/index.html').read())
    #return render_template('index.html')

@app.route('/view',methods=['GET'])
def view():
#    return make_response(open('templates/index.html').read())
    return render_template('view.html')

@app.route('/all-incidents/',methods=['GET'])
def getIncidents():
    incidents = db.loadAllIncidents()
    incidents = utils.indexDicts(incidents,"acc_id")
    return jsonify( incidents )

if __name__ == "__main__":     
    app.run() 
