import requests
from app import app
from utils.logger.logger import setup_console_root_logger

logger = setup_console_root_logger()

URL = "https://jsonplaceholder.typicode.com/todos"

@app.route('/todo')
def todo_all():
    try:
        res = requests.get(url = URL).json()
        logger.debug(res)
        return res
    except Exception as e:
        logger.error("Error fetching results", e)
        exit(1)

@app.route('/todo/<int:id>')
def todo_id(id):
    try:
        res = requests.get(url = f"{URL}/{id}").json()
        logger.debug(res)
        return res
    except Exception as e:
        logger.error("Error fetching results", e)
        exit(1)
