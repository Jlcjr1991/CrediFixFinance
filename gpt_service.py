
import openai

openai.api_key = 'sk_test_your_openai_key'

def generate_dispute_letter(user_info):
    prompt = f"Generate a Metro 2 dispute letter for {user_info}"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a financial dispute letter assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content']
