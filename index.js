const fs = require('fs');
const SVGDOM = require('svgdom');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');

function createLogo() {
  // Prompt for user input and retrieve values

  // Create the SVG document
  const document = SVGDOM.Document;
  const window = document.defaultView;
  registerWindow(window, document);

  const svg = SVG(window.document.documentElement);
  svg.size(300, 200);

  // Draw the shape based on user input
  const shape = prompt('Enter the shape (circle, triangle, square):');
  const shapeColor = prompt('Enter the shape\'s color (keyword or hexadecimal):');

  if (shape === 'circle') {
    svg.circle(100).cx(150).cy(100).fill(shapeColor);
  } else if (shape === 'triangle') {
    svg.polygon('150,20 280,180 20,180').fill(shapeColor);
  } else if (shape === 'square') {
    svg.rect(200, 120).x(50).y(40).fill(shapeColor);
  }

  // Add the text based on user input
  const text = prompt('Enter up to three characters:');
  const textColor = prompt('Enter the text color (keyword or hexadecimal):');

  svg.text(text).font({ fill: textColor, family: 'Arial', size: 60 }).center(150, 100);

  // Save the SVG file
  const outputFilename = 'logo.svg';
  fs.writeFileSync(outputFilename, svg.svg());
  console.log(`Generated ${outputFilename}`);
}

// Call the function to create the logo
createLogo();