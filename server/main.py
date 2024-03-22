from flask import Flask, request, jsonify, Response, json
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from PIL import Image
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
        if file.filename.endswith(".jpg") or file.filename.endswith(".jpeg") or file.filename.endswith(".png"): # Corrected file.filename
            img = Image.open(file)
            img = img.convert("RGB")
            desired_filename = "IMAGE"+ ".png"
        
            # Save the file with the specified filename
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], desired_filename)
            img.save(file_path)
        
            return jsonify({
                "message": "Image uploaded successfully",
                "path": file_path
            }), 200
        else:
            return jsonify({"error": "Invalid file format"}), 400
    else:
        return jsonify({"error": "Invalid file format"}), 400
    
    
    



@app.route('/predictedResult', methods=['POST','GET'])
def predict_hood_damage_with_uploaded_image():
    filePath = 'uploads/IMAGE.png'
    hood_result = predict_hood_damage(filePath)
    buffer_result = predict_front_buffer_damage(filePath)
    headlight_result = predict_head_light_damage(filePath)
    result = {"hood":hood_result,"buffer":buffer_result, "headlight": headlight_result}
    return jsonify(result),200

    



if __name__ == "__main__":
    app.run(port=5000)