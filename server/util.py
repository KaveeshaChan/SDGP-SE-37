import base64
import json
# import cv2
import joblib
import numpy as np

__class_name_to_number = {}
__class_number_to_name = {}

__model = None


def load_saved_artifacts():
    print("loading model...")
    global __class_name_to_number
    global __class_number_to_name

    with open("./artifacts/class_dictionary.json", "r") as f:
        __class_name_to_number = json.load(f)
        __class_number_to_name = {v: k for k, v in __class_name_to_number.items()}

        global __model
        if __model is None:
            with open("./artifacts/exper_model.pkl", "rb") as f:
                __model = joblib.load(f)
        print("loading saved artifacts..done")



def classify_image(image_base64, file_path=None):
    result = []

    result.append( __model.predict(image_base64,file_path))

    return result

# def get_cv2(b64str):
#     encoded_data = b64str.split(',')[1]
#     nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
#     img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#     return img


def get_b64_image():
    with open("b64.txt") as f:
        return f.read()


if __name__ == '__main__':
    load_saved_artifacts()
    # print(classify_image((get_b64_image()), None))
