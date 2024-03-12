import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf

# Load the saved model
loaded_model = tf.keras.models.load_model('hood_damage_model_mobilenet.keras')

# Define image dimensions
img_width = 180
img_height = 180


# Function to estimate cost range and decision based on damage severity for hood
def estimate_hood_cost(severity):
    if severity == "Minor":
        return "Repair", "$300 - $800"
    elif severity == "Moderate":
        return "Repair", "$800 - $2000"
    elif severity == "Severe":
        return "Replace", "Over $2000"
    else:
        return "N/A", "N/A"


# Load and preprocess the image
image_path = "server/test.png"
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
if class_names[predicted_class_index] == 'undamaged' and confidence >= 80:
    print("The uploaded image shows no damage.")
elif confidence < 20:  # Adjust threshold based on your model's performance
    print("The uploaded image is invalid or unrelated to vehicle damage.")
else:
    # Further analyze the confidence level to categorize the damage
    if confidence >= 80:
        damage_category = 'Severe'
    elif confidence >= 60:
        damage_category = 'Moderate'
    else:
        damage_category = 'Minor'

    print("The uploaded image shows", damage_category, "damage with a confidence of", confidence, "%.")

    # Estimate damage cost based on severity
    repair_decision, cost_range = estimate_hood_cost(damage_category)

    plt.subplot(1, 2, 2)
    text = f"Vehicle Part: Hood\n"
    text += f"Predicted Damage: {damage_category}\n"
    text += f"Confidence: {confidence:.2f}%\n\n"
    text += f"Repair Decision: {repair_decision}\n"
    text += f"Cost Range: {cost_range}"
    plt.text(0.5, 0.5, text, horizontalalignment='center', verticalalignment='center', fontsize=12)
    plt.axis("off")
    plt.show()
