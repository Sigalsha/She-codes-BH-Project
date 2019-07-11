from flask import Flask


application = Flask(__name__)


@application.route("/hello/<name>")
def hello_world(name: str):
    return "Hello, {}".format(name)


if __name__ == "__main__":
    application.run()
