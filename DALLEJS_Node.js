const { exec } = require('child_process');
const maxApi = require('max-api');

const pythonVersion = '/Library/Frameworks/Python.framework/Versions/3.10/bin/python3.10'; // Replace with the specific Python version you want to use
const pythonScript = 'script.py';
var inputString = 'winged horse';

maxApi.addHandler('text_input', (text) => {
  inputString = text;
});

function runPythonWithArg() {
  exec(`${pythonVersion} ${pythonScript} "${inputString}"`, (error, stdout, stderr) => {
    if (error) {
      maxApi.outlet(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      maxApi.outlet(`Error: ${stderr}`);
      return;
    }
    maxApi.outlet(`Python script output:\n${stdout}`);
	//maxApi.outlet(`${inoutString}`);
	//maxApi.outlet(`done`);
  });
}

// Add a message handler to listen for the 'start' message from Max
maxApi.addHandler('start', () => {
  runPythonWithArg();
});



