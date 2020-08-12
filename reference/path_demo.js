const path = require('path');

// basename method. gets the base file name
console.log(path.basename(__filename));

// get directory name dirname
console.log(path.dirname(__filename));

// get file extension name
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
