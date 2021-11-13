// fs = file system
const fs = require('fs')
const path = require('path')

//  Папку перезаписати неможна вибиває помилку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Folder created')
// })



// Файл можна перезаписувати безкінечно
const filePath = path.join(__dirname, 'test', 'test.txt')

// fs.appendFile(filePath, '\nHello Again', err => {
//   if (err) {
//     throw err
//   }
//   console.log('File created')
// })

fs.readFile(filePath,'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  
  console.log(content)
})