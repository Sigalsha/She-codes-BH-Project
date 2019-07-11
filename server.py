from typing import Dict

from flask import Flask, jsonify

application = Flask(__name__)


@application.route("/hello/<name>")
def hello_world(name: str):
    return "Hello, {}".format(name)


@application.route("/personal-info")
def personal_info(name: str):
    info: Dict = {"first_name": "{}".format(name),
                  "last_name": "yaroslavski",
                  "email": "lina@mail.com"}

    resp = jsonify(info)
    return resp


if __name__ == "__main__":
    application.run()
