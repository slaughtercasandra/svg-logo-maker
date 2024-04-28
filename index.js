// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What text would you like to log?',
//       name: 'text',
//     },
//     {
//       type: 'list',
//       message: 'What color would you like to use?',
//       name: 'color',
//       choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
//     },
//   ])
//   .then((response) => console.log(colors[response.color](response.text)));


const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to prompt user for input
const promptUser = async () => {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the text:',
                validate: input => {
                    return input.length > 3 ? 'Please enter up to three characters.' : true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hexadecimal):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hexadecimal):'
            }
        ]);
        return userInput;
    } catch (err) {
        console.error('Error:', err);
    }
};

// Function to write SVG to file
const writeToFile = (data) => {
    fs.writeFile('./logo.svg', data, (err) => {
        err ? console.error(err) : console.log('generated logo.sv!');

    });
};

// Main function
const main = async () => {
    try {
        const userInput = await promptUser();
        let shape;
        switch (userInput.shape.toLowerCase()) {
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                throw new Error('Invalid shape.');
        }
        shape.setColor(userInput.shapeColor);
        const svg = `<svg width="300" height="200">
                        ${shape.render()}
                        <text x="10" y="20" fill="${userInput.textColor}">${userInput.text}</text>
                    </svg>`;

        // Writing SVG to file
        writeToFile(svg);
    } catch (error) {
        console.error('Error:', error);
    }
};
main(); 
