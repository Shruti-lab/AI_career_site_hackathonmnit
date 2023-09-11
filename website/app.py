from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = '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'

@app.route('/', methods=['POST'])
def process_data():
    try:
        data = request.json

        # Extract the score and personalityChoices from the JSON data
        domain = data.get('domain')
        score = data.get('score')
        questions = data.get('questions')
        personality_choices = data.get('personalityChoices')

        # Use the score and personalityChoices to generate career options (as shown in the previous Python code)
        career_options = generate_career_options(score, personality_choices)

        return jsonify(career_options)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


# Define the function to call the OpenAI API

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]
def generate_career_options(score, personality_choices):
    get_completion()
    prompt = f"Given an aptitude test score of {score} and personality choices:\n"
    
    for question, choice in personality_choices.items():
        prompt += f"- Question: {question}\n  Choice: {choice}\n"
        
    
    # response = openai.Completion.create(
    #     engine="text-davinci-002",
    #     prompt=prompt,
    #     max_tokens=100,
    #     n=5,  # Number of career options to generate
    #     stop="\n",  # Stop generating after a line break
    #     temperature=0.7,  # Adjust the temperature for creativity (0.2 for more focused, 1.0 for more random)
    #     api_key=api_key
    # )
    prompt=f"""Based on following keywords come up with list of 2 career options.
    1. Scored 10/10 in aptitue
    2. Scored 10/10 in maths test
    3. good in problem solving
    4. excellent design perception
    5. good in analysis
    6. good in creative thinking
    Also describe daily operations/work done of that occupation, daily work life in 30 words.
    Also mention 3 skills required (soft and hard skills) under each career option
    Provide them in JSON format with the following keys:
    occupation, hard-skills, hard-skills,dailly-work ."""
    response = get_completion(prompt)
    print(response)


    career_options = response.choices[0].text.strip().split("\n")

    # Format the career options into a JSON object
    career_data = {
        "occupation": career_options[0],
        "hard-skills": career_options[1],
        "soft-skills": career_options[2],
        "daily-work": career_options[3],
    }

    return career_data


if __name__ == '__main__':
    app.run()
