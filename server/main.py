from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/main', methods=['GET', 'POST'])
def hello():
    data = {"lionel_mes": 0, "maria_sharapova": 1, "roger_federer": 2, "serena_williams": 3, "virat_kohli": 4}
    print(data)
    return jsonify(data), 200


if __name__ == "__main__":
    app.run(port=5000)
