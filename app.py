from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS  # Comment out for deployment
from .api.HelloApiHandler import *
from .api.HighScoreHandler import *


app = Flask(__name__, static_url_path='', static_folder='frontend/build')  # add ref to frontend subdirectory
CORS(app)  # Comment out for deployment
api = Api(app)


@app.route('/', defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')  # retrieves react index from fe folder


api.add_resource(HelloApiHandler, '/flask/hello')
api.add_resource(highScoresHandler, '/highscores')


