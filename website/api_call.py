import openai

openai.api_key = "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"

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
user_input = "I'm not sure which career path to choose. Can you help?"
ai_response = get_ai_response(user_input)
print(ai_response)
