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
    buffer_result = predict_front_buffer_damage(filePath)
    hood_result = predict_hood_damage(filePath)
    headlight_result = predict_head_light_damage(filePath)
    return jsonify(buffer_result,hood_result,headlight_result),200
    # Get the file_path from the upload response
    # upload_response = upload()
    
    # print(upload_response)

    # if isinstance(upload_response, tuple) and len(upload_response) == 2:
    #     upload_response = upload_response[0]
    
    # if upload_response.status_code == 200:
    #         # Extract the file_path from the JSON response
    #     file_path = upload_response.json().get('file_path')

    #         # Call the predict_hood_damage function with the file_path
    #     result = predict_hood_damage(file_path)
    #     print(result)
    #     return jsonify(result=result), 200
    # else:
    #         # If upload failed, return an error response
    #     error_message = upload_response.json().get('error', 'Unknown error')
    #     return jsonify(error=error_message), upload_response.status_code

 


# @app.route('/predict_front_buffer_damage', methods=['POST'])
# def predict_front_buffer_damage_api():
#      filePath = 'uploads/IMAGE.png'
#      result = predict_front_buffer_damage(filePath)
#      return jsonify(result=result)

# @app.route('/predict_head_light_damage', methods=['POST'])
# def predict_head_light_damage_api():
#     image_path = request.json.get('image_path')
#     result = predict_head_light_damage(image_path)
#     return jsonify(result=result)
    



if __name__ == "__main__":
    app.run(port=5000)
