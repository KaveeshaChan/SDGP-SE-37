from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from util import predict_hood_damage, predict_front_buffer_damage, predict_head_light_damage

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}

@app.route('/main', methods=['GET'])
def hello():
    data = {"Connected (*_-) ": 0}
    print(data)
    return jsonify(data), 200

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Call prediction functions with file path
        hood_result = predict_hood_damage(file_path)
        front_buffer_result = predict_front_buffer_damage(file_path)
        head_light_result = predict_head_light_damage(file_path)

        # Return prediction results
        return jsonify({
            "file_path": file_path,
            "hood_damage_prediction": hood_result,
            "front_buffer_damage_prediction": front_buffer_result,
            "headlight_damage_prediction": head_light_result,
        }), 200
    else:
        return jsonify({"error": "Invalid file format"}), 400
    
    
    
    

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
    



if __name__ == "__main__":
    app.run(port=5000)
