
import openai
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
import os


openai.api_key = " "
def get_ai_response(user_input):
    prompt = f"User: {user_input}\nAI:"
    response = openai.Completion.create(
        engine="text-davinci-003",  # Choose the appropriate engine
        prompt=prompt,
        max_tokens=50  # You can adjust this based on your desired response length
    )
    ai_response = response.choices[0].text.strip()
    return ai_response

# Example usage
user_input = "My stregnths are maths,toc,dbms,communication skills,coding in java.Suggest career path to chose.Salary expected 2crore per month."
ai_response = get_ai_response(user_input)
print(ai_response)

'''
def get_career_advice(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",  # Choose the appropriate engine
        prompt=prompt,
        max_tokens=10  # You can adjust this based on your desired response length
    )
    return response.choices[0].text.strip()

# Example usage
user_input = "I'm not sure which career path to choose. Can you help?"
advice = get_career_advice(user_input)
print(advice)
'''
