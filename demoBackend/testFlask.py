from flask import Flask, request, Response
import json
import numpy as np
from sklearn import manifold
from tsne import getReuslt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"
@app.route("/getDRResult", methods=['POST'])
def getDRResult():
    req = request.json
    # rt = {'info': 'succeed'}
    result = getReuslt(indexes=req[u'indexes'], dimensions=req[u'dimensions'], isDataProjection=req[u'isDataProjection'], randomState=req[u'tsneConfiguration'][u'randomState'])
    rt = {'data': result}
    response = Response(json.dumps(rt), mimetype='application/json')
    return response

app.run()
