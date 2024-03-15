from flask import Flask, request, jsonify
from util import predict_hood_damage, predict_front_buffer_damage, predict_head_light_damage

from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
# CORS(app)  # Enable CORS for all origins during development
CORS(app)  # Enable CORS for all origins during development


@app.route('/predict_hood_damage', methods=['POST'])
def predict_hood_damage_api():
    image_path = request.json.get('image_path')
    result = predict_hood_damage(image_path)
    return jsonify(result=result)


@app.route('/predict_front_buffer_damage', methods=['POST'])
def predict_front_buffer_damage_api():
    image_path = request.json.get('image_path')
    result = predict_front_buffer_damage(image_path)
    return jsonify(result=result)

@app.route('/predict_head_light_damage', methods=['POST'])
def predict_head_light_damage_api():
    image_path = request.json.get('image_path')
    result = predict_head_light_damage(image_path)
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
