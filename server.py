from typing import Dict

from flask import Flask, jsonify

application = Flask(__name__)


@application.route("/hello/<name>")
def hello_world(name: str):
    return "Hello, {}".format(name)


@application.route("/personal-info/<name>")
def personal_info(name: str):
    info: Dict = {"name": "{}".format(name)}

    resp = jsonify(info)
    return resp


if __name__ == "__main__":
    application.run()
