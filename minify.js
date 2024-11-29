const fs = require('fs');
const path = require('path');
const terser = require('terser');

const filePath = path.resolve(__dirname, 'public', 'script.js');

// Read the JavaScript file
const fileContent = fs.readFileSync(filePath, 'utf8');

// Minify and mangle the content (shorten variable names)
terser.minify(fileContent, {
  mangle: {
    toplevel: true, // Mangle top-level variable names
  },
  compress: {
    drop_console: true, // Optionally remove console logs
  },
  output: {
    comments: false, // Remove comments from output
  }
}).then(minified => {
  if (minified.error) {
    console.error('Minification error:', minified.error);
    return;
  }

  // Save the minified content back to the file
  fs.writeFileSync(path.resolve(__dirname, 'public', 'script.min.js'), minified.code);
  console.log('File minified and variable names shortened successfully');
}).catch(err => {
  console.error('Error during minification:', err);
});
