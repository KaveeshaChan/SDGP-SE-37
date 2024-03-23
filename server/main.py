from flask import Flask, request, jsonify, Response, json  # Import necessary Flask modules
from flask_cors import CORS  # Import CORS for cross-origin resource sharing
import os  # Import os module for operating system related functions
from werkzeug.utils import secure_filename  # Import secure_filename to handle secure file uploads
from PIL import Image  # Import PIL for image processing
from util import predict_hood_damage, predict_front_buffer_damage, predict_head_light_damage  # Import custom functions for predicting damage

app = Flask(__name__)  # Create a Flask application instance
CORS(app)  # Enable CORS for the Flask app

UPLOAD_FOLDER = 'uploads'  # Define the upload folder
if not os.path.exists(UPLOAD_FOLDER):  # Create the upload folder if it doesn't exist
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER  # Configure the app to use the upload folder

# Function to check if the file extension is allowed
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}

# Route for a GET request to '/main' endpoint
@app.route('/main', methods=['GET'])
def hello():
    data = {"Connected (*_-) ": 0}  # Define response data
    print(data)  # Print the data to console
    return jsonify(data), 200  # Return JSON response with status code 200

# Route for a POST request to '/upload' endpoint
@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:  # Check if 'image' is present in request files
        return jsonify({"error": "No image provided"}), 400  # Return error response if no image provided

    file = request.files['image']  # Get the uploaded file

    if file.filename == '':  # Check if filename is empty
        return jsonify({"error": "No selected file"}), 400  # Return error response if no file selected

    if file and allowed_file(file.filename):  # Check if file is allowed and not empty
        if file.filename.endswith(".jpg") or file.filename.endswith(".jpeg") or file.filename.endswith(".png"):  # Check file format
            img = Image.open(file)  # Open the image using PIL
            img = img.convert("RGB")  # Convert image to RGB format
            desired_filename = "IMAGE"+ ".png"  # Define desired filename
        
            # Save the file with the specified filename
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], desired_filename)  # Define the file path
            img.save(file_path)  # Save the image to the specified path
        
            return jsonify({
                "message": "Image uploaded successfully",  # Return success message
                "path": file_path  # Return the file path
            }), 200  # Return JSON response with status code 200
        else:
            return jsonify({"error": "Invalid file format"}), 400  # Return error response for invalid file format
    else:
        return jsonify({"error": "Invalid file format"}), 400  # Return error response for invalid file format

# Route for a POST or GET request to '/predictedResult' endpoint
@app.route('/predictedResult', methods=['POST','GET'])
def predict_hood_damage_with_uploaded_image():
    filePath = 'uploads/IMAGE.png'  # Define the file path for the uploaded image
    hood_result = predict_hood_damage(filePath)  # Predict hood damage using custom function
    buffer_result = predict_front_buffer_damage(filePath)  # Predict front buffer damage using custom function
    headlight_result = predict_head_light_damage(filePath)  # Predict headlight damage using custom function
    result = {"hood":hood_result,"buffer":buffer_result, "headlight": headlight_result}  # Create result dictionary
    return jsonify(result),200  # Return JSON response with status code 200

if __name__ == "__main__":
    app.run(port=5000)  # Run the Flask app on port 5000 if executed as main script
