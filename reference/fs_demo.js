const fs = require('fs');
const path = require('path');

// create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created');
// })

// create and write to a file + append the the created file 
// overwrites whatever is in the file 
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'this is where content in the file goes',
//     (err) => {
//         if (err) throw err;
//         console.log('file created');
// // callback function below: 
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             ' I love NodeJS',
//             (err) => {
//                 if (err) throw err;
//                 console.log('file created');
//             }
//         );
//     }
// );


// Read file 
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })


// rename a file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if (err) throw err;
  console.log('file renamed....');
})