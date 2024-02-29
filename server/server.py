from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hello', methods = ['GET','POST'])
def classify_image():
    return"Hi"

if __name__ == "__main__":
    app.run(port=5000)
