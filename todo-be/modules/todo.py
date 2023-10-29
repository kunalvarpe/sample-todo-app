import requests
from app import app
from utils.logger.logger import setup_console_root_logger
from flask_cors import cross_origin

logger = setup_console_root_logger()

TODO_API_URL = "https://jsonplaceholder.typicode.com/todos"

@app.route('/todo')
@cross_origin(supports_credentials=True)
def todo_all():
    try:
        res = requests.get(url = TODO_API_URL).json()
        logger.debug(res)
        return res
    except Exception as e:
        logger.error("Error fetching results", e)
        exit(1)

@app.route('/todo/<int:id>')
@cross_origin(supports_credentials=True)
def todo_id(id):
    try:
        res = requests.get(url = f"{TODO_API_URL}/{id}").json()
        logger.debug(res)
        return res
    except Exception as e:
        logger.error("Error fetching results", e)
        exit(1)
