from flask import Flask, jsonify, request, abort, Response
import jsonpickle
from src.mappers import create_family_tree_from_json

application = Flask(__name__)


@application.route("/family-tree", methods=["POST"])
def family_tree_handler():
    family_tree_json = request.get_json(silent=True)
    if not family_tree_json:
        abort(400, description="Request is missing a valid JSON body")

    family_tree = create_family_tree_from_json(family_tree_json)

    # Using jsonpickle library to return serialized python object in response.
    # jsonify does not work here because it can only serialize dictionary.
    return Response(jsonpickle.encode(family_tree), mimetype="application/json")


if __name__ == "__main__":
    application.run()
