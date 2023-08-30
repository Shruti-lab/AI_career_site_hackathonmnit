from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# X: Features, y: Labels
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Decision Tree classifier
model = DecisionTreeClassifier()

# Train the model
model.fit(X_train, y_train)

# Predict career labels for test data
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
# Collect user input
education_level = input("Enter your education level: ")
skills = input("Enter your skills (comma-separated): ")
interests = input("Enter your interests (comma-separated): ")

# Preprocess user input
user_data = preprocess_user_input(education_level, skills, interests)  # Convert to suitable format

# Make prediction
predicted_career = model.predict([user_data])

print("Predicted Career:", predicted_career)
