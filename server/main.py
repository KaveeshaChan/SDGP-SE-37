from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from PIL import Image
from io import BytesIO

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/main', methods=['GET'])
def hello():
    data = {"Connected (*_-) ": 0}
    print(data)
    return jsonify(data), 200

@app.route('/upload', methods=['POST'])
def upload():
    data = request.json
    if 'image' not in data:
        return jsonify({"error": "No image provided"}), 400

    # Decode Base64 image data
    base64_image = data['image']
    image_data = base64.b64decode(base64_image)
    
    # You can save the image to a file or process it as needed
    # For example, to save it to a file
    image = Image.open(BytesIO(image_data))
    image.save('server/artifacts')

    # Respond with a JSON success message
    return jsonify({"message": "Image uploaded successfully"}), 200


if __name__ == "__main__":
    app.run(port=5000)
