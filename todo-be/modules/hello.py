from app import app
from flask import jsonify
from flask_cors import cross_origin

@app.route('/')
@cross_origin(supports_credentials=True)
def hello():
  return jsonify({"message":"Hello from Flask!"})
