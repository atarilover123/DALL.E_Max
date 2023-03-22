# DALL.E Max

Generate images using the DALL.E API inside MaxMSP. 

This repository includes a simple demo patch to showcase operation and an augmented version that uses the AI generated imagery to control sound.

Video tutorial here: [https://youtu.be/q-vHkC8E4U4](https://youtu.be/q-vHkC8E4U4)

<img src="https://github.com/atarilover123/DALL.E_Max/blob/main/Screenshots/Tutorial_screenshot.png" width=700>

## Installation

This was written and tested on a Apple M1 Max running Monterey 12.5.

Python version -- Python3.10 

Node version -- 18.15.0

#### Install the relevant Python libraries 
openai and Pillow if you don't have already

<img src="https://github.com/atarilover123/DALL.E_Max/blob/main/Screenshots/Imports.png" width=700>

And add in your OpenAI API key to "script.py"

<img src="https://github.com/atarilover123/DALL.E_Max/blob/main/Screenshots/Add_key.png" width=700>

## Notes

This is an experiment. I use the node.script object in Max to trigger and interface with the Python script. The process could be streamlined by doing the API call directly from node.script. + adding in a text or message box in Max to feed in the API key vs replacing the key in "script.py" would also make this more user friendly.

I hope this works on your machine <it's fun> I haven't tested this on multiple machines yet so no guarantees it will. 

The multichannel/granular looping patch is a quick example to show how the image inputs can be used to control sound. It's fairly basic, feel free to augment it, break it apart, make it better and build your own things.   

If you use this to make stuff I'd love to see!









