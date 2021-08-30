const fs = require('fs');


const book = {
    title: 'call of duty',
    authoriz: 'unknown'
}

const userJson = JSON.stringify(book)
// const user = JSON.parse(userJson)
// fs.writeFileSync('1-json.json', userJson)
const dataJson = fs.readFileSync('./1-json.json').toString()
const data = JSON.parse(dataJson)
data.title = 'change title'

const userJsonNew = JSON.stringify(data)
// fs.writeFileSync('1-json.json', userJsonNew)

