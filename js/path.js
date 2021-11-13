const path = require('path')

console.log('Название файла: ', path.basename(__filename))

console.log('Имя директория: ', path.dirname(__filename))
console.log('Розширение файла: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename).name)