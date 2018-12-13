from flask import Flask, request, Response
import json
import numpy as np
from sklearn import manifold
from waitress import serve
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
    result = getReuslt(indexes=req[u'indexes'],
                       dimensions=req[u'dimensions'],
                       isDataProjection=req[u'isDataProjection'],
                       randomState=req[u'tsneConfiguration'][u'randomState'],
                       perplexity=req[u'tsneConfiguration'][u'perplexity']
                       )
    rt = {
        'data': result
    }
    response = Response(json.dumps(rt), mimetype='application/json')
    return response

# app.run()
serve(app, listen='59.110.52.1333:3111')
