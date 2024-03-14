import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf


# Load the saved model
loaded_model = tf.keras.models.load_model('server/artifacts/hood_damage_model_updated.h5')


# Define image dimensions
img_width = 180
img_height = 180


# Function to estimate cost range and decision based on damage severity for hood
def estimate_hood_cost(severity):
    if severity == "Minor":
        return "Repair", "LKR2,500 - LKR10,000"
    elif severity == "Moderate":
        return "Repair", "LKR10,000 - LKR45,000"
    elif severity == "Severe":
        return "Replace", "LKR45,000 - LKR60,000"
    else:
        return "N/A", "N/A"

# Load and preprocess the image
image_path = "uploads\stock-photo-broken-car-after-the-accident-front-view-damaged-bumper-headlight-car-hood-2331870105.jpg"
image = tf.keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
image_array = tf.keras.preprocessing.image.img_to_array(image)
image_array = tf.expand_dims(image_array, 0)

# Predict the class of the image
prediction = loaded_model.predict(image_array)
predicted_class_index = np.argmax(prediction)
confidence = np.max(prediction) * 100

# Define class names
class_names = ['undamaged', 'minor damage', 'moderate damage', 'severe damage']

# Check if the predicted class indicates damage
if class_names[predicted_class_index] != 'undamaged':
    # Further analyze the confidence level to categorize the damage
    if confidence >= 80:
        damage_category = 'Severe'
    elif confidence >= 60:
        damage_category = 'Moderate'
    else:
        damage_category = 'Minor'

    print("The uploaded image shows", damage_category, "damage with a confidence of", confidence, "%.")

    # Estimate damage cost based on severity
    repair_decision, cost_range =  estimate_hood_cost(damage_category)

    # Display the image with the predicted damage category and cost information
   

    plt.subplot(1, 2, 2)
    print("Vehicle Part: Hood\n")
    print("Predicted Damage:", {damage_category})
    print("Confidence:", {confidence})
    print("Repair Decision:", {repair_decision})
    print("Cost Range:", {cost_range})
    # plt.text(0.5, 0.5, text, horizontalalignment='center', verticalalignment='center', fontsize=12)
 
else:
    print("The uploaded image shows no damage.")

#Headlight damages
    

loaded_model = tf.keras.models.load_model('server/artifacts/headlight_damage_model_updated.h5')


# Define image dimensions
img_width = 180
img_height = 180


def estimate_headlight_cost(severity):
    if severity == "Minor":
        return "Repair", "LKR2,500 - LKR6,000"
    elif severity == "Moderate":
        return "Replace", "LKR30,000 - LKR60,000"
    elif severity == "Severe":
        return "Replace", "LKR30,500 - LKR60,000"
    else:
        return "N/A", "N/A"

# Load and preprocess the image
image_path = "uploads\stock-photo-broken-car-after-the-accident-front-view-damaged-bumper-headlight-car-hood-2331870105.jpg"
image = tf.keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
image_array = tf.keras.preprocessing.image.img_to_array(image)
image_array = tf.expand_dims(image_array, 0)

# Predict the class of the image
prediction = loaded_model.predict(image_array)
predicted_class_index = np.argmax(prediction)
confidence = np.max(prediction) * 100

# Define class names
class_names = ['undamaged', 'minor damage', 'moderate damage', 'severe damage']

# Check if the predicted class indicates damage
if class_names[predicted_class_index] != 'undamaged':
    # Further analyze the confidence level to categorize the damage
    if confidence >= 80:
        damage_category = 'Severe'
    elif confidence >= 60:
        damage_category = 'Moderate'
    else:
        damage_category = 'Minor'

    print("The uploaded image shows", damage_category, "damage with a confidence of", confidence, "%.")

    # Estimate damage cost based on severity
    repair_decision, cost_range = estimate_headlight_cost(damage_category)

    plt.subplot(1, 2, 2)
    
    print("Vehicle Part: Headlight\n")
    print("Predicted Damage:", {damage_category})
    print("Confidence:", {confidence})
    print("Repair Decision:", {repair_decision})
    print("Cost Range:", {cost_range})

  
else:
    print("The uploaded image shows no damage.")

    # Display the undamaged image
   