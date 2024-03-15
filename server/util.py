def predict_hood_damage(image_path):
    import numpy as np
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
    image = tf.keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
    image_array = tf.keras.preprocessing.image.img_to_array(image)
    image_array = tf.expand_dims(image_array, 0)

    # Predict the class of the image
    prediction = loaded_model.predict(image_array)
    predicted_class_index = np.argmax(prediction)
    confidence = np.max(prediction) * 100

    # Define class names
    class_names = ['undamaged', 'minor damage', 'moderate damage', 'severe damage']

    # Initialize result dictionary
    result = {
        'Predicted_Class': class_names[predicted_class_index],
        'Confidence': confidence
    }

    # Check if the predicted class indicates damage
    if class_names[predicted_class_index] != 'undamaged':
        # Further analyze the confidence level to categorize the damage
        if confidence >= 80:
            damage_category = 'Severe'
        elif confidence >= 60:
            damage_category = 'Moderate'
        else:
            damage_category = 'Minor'

        # Estimate damage cost based on severity
        repair_decision, cost_range = estimate_hood_cost(damage_category)

        # Update result dictionary
        result.update({
            'Damage_Category': damage_category,
            'Repair_Decision': repair_decision,
            'Cost_Range': cost_range
        })

    return result


def predict_front_buffer_damage(image_path):
    import numpy as np  # Import NumPy here
    import tensorflow as tf

    # Load the saved model
    loaded_model = tf.keras.models.load_model('server/artifacts/frontbuffer_damage_model_updated.h5')

    # Define image dimensions
    img_width = 180
    img_height = 180

    # Function to estimate cost range and decision based on damage severity for front buffer
    def estimate_front_buffer_cost(severity):
        if severity == "Minor":
            return "Repair", "LKR2,500 - LKR8,000"
        elif severity == "Moderate":
            return "Repair", "LKR8,000 - LKR20,000"
        elif severity == "Severe":
            return "Replace", "LKR20,000 - LKR50,000"
        else:
            return "N/A", "N/A"

    # Load and preprocess the image
    image = tf.keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
    image_array = tf.keras.preprocessing.image.img_to_array(image)
    image_array = tf.expand_dims(image_array, 0)

    # Predict the class of the image
    prediction = loaded_model.predict(image_array)
    predicted_class_index = np.argmax(prediction)
    confidence = np.max(prediction) * 100

    # Define class names
    class_names = ['undamaged', 'minor damage', 'moderate damage', 'severe damage']

    # Initialize result dictionary
    result = {
        'Predicted_Class': class_names[predicted_class_index],
        'Confidence': confidence
    }

    # Check if the predicted class indicates damage
    if class_names[predicted_class_index] != 'undamaged':
        # Further analyze the confidence level to categorize the damage
        if confidence >= 80:
            damage_category = 'Severe'
        elif confidence >= 60:
            damage_category = 'Moderate'
        else:
            damage_category = 'Minor'

        # Estimate damage cost based on severity
        repair_decision, cost_range = estimate_front_buffer_cost(damage_category)

        # Update result dictionary
        result.update({
            'Damage_Category': damage_category,
            'Repair_Decision': repair_decision,
            'Cost_Range': cost_range
        })

    return result


def predict_head_light_damage(image_path):
    import numpy as np  # Import NumPy here
    import tensorflow as tf

    # Load the saved model
    loaded_model = tf.keras.models.load_model('server/artifacts/headlight_damage_model_updated.h5')

    # Define image dimensions
    img_width = 180
    img_height = 180

    # Function to estimate cost range and decision based on damage severity for headlight
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
    image = tf.keras.preprocessing.image.load_img(image_path, target_size=(img_height, img_width))
    image_array = tf.keras.preprocessing.image.img_to_array(image)
    image_array = tf.expand_dims(image_array, 0)

    # Predict the class of the image
    prediction = loaded_model.predict(image_array)
    predicted_class_index = np.argmax(prediction)
    confidence = np.max(prediction) * 100

    # Define class names
    class_names = ['undamaged', 'minor damage', 'moderate damage', 'severe damage']

    # Initialize result dictionary
    result = {
        'Predicted_Class': class_names[predicted_class_index],
        'Confidence': confidence
    }

    # Check if the predicted class indicates damage
    if class_names[predicted_class_index] != 'undamaged':
        # Further analyze the confidence level to categorize the damage
        if confidence >= 80:
            damage_category = 'Severe'
        elif confidence >= 60:
            damage_category = 'Moderate'
        else:
            damage_category = 'Minor'

        # Estimate damage cost based on severity
        repair_decision, cost_range = estimate_headlight_cost(damage_category)

        # Update result dictionary
        result.update({
            'Damage_Category': damage_category,
            'Repair_Decision': repair_decision,
            'Cost_Range': cost_range
        })

    return result


# Assuming image_path is the path to the image you want to predict for each model
image_path = "uploads\Hood_img_d.png"

# Predict for hood damage model
hood_result = predict_hood_damage(image_path)
print("Hood Damage Prediction:")
print(hood_result)

# Predict for front buffer damage model
front_buffer_result = predict_front_buffer_damage(image_path)
print("Front Buffer Damage Prediction:")
print(front_buffer_result)

# Predict for headlight damage model
head_light_result = predict_head_light_damage(image_path)
print("Headlight Damage Prediction:")
print(head_light_result)