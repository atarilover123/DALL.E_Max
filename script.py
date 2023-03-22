import os

import openai

from PIL import Image
import requests
from io import BytesIO

import sys

input_string = sys.argv[1]
#print(f"Received string from JavaScript: {input_string}")

def save_file(data, prefix, extension):
    counter = 1
    while True:
        file_name = f"{prefix}_{counter:03d}.{extension}"
        if not os.path.exists(file_name):
            img.save(file_name)
            break
        counter += 1

PROMPT = input_string

#add your API key below 
openai.api_key = "  API key goes here... " 

response = openai.Image.create(
    prompt=PROMPT,
    n=1,
    size="256x256",
)

imshow = (response["data"][0]["url"])

response = requests.get(imshow)
img = Image.open(BytesIO(response.content))
#img.show()

img.save("output.jpg")
save_file(img, "Outputs/D_im", "jpg")
