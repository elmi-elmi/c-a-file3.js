const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const loadedData = loadNote()
    // const loadedData = loadNote('notes.txt')

    // const duplicates = loadedData.filter((note) => note.title === title)
    const duplicate = loadedData.find((note) => note.title === title)
    if (!duplicate) {
        loadedData.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('new note added.'));

    } else {
        console.log(chalk.red.inverse('title taken'));

    }
    saveNote(loadedData)

}


const saveNote = (data) => {
    const jsonData = JSON.stringify(data)
    fs.writeFileSync('notes.txt', jsonData)
}


const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.txt')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        console.log('load empty note form  catch')
        return []
    }
}


const removeNote = (title) => {
    const loadedData = loadNote('notes.txt')
    const newData = loadedData.filter((item, index) => item.title !== title)

    if (newData.length < loadedData.length) {
        console.log(chalk.green.inverse('note removed.'));
        saveNote(newData)

    } else {
        console.log(chalk.red.inverse('not note removed.'));

    }


}

const getNotes = () => {
    const data = loadNote()
    console.log(chalk.white.inverse('Notes lists:'));
    data.forEach(element => {
        console.log(element.title);
    })
}

const readNote = (title) => {
    const data = loadNote();
    const readedNote = data.find(note => note.title === title)
    if (readedNote) {
        console.log(chalk.yellow(readedNote.title));
        // console.log(readedNote.title);
        console.log(readedNote.body);
    } else {
        console.log(chalk.red.inverse('this note not find.'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    getNotes: getNotes,
    readNote: readNote
}
// module.exports = addNote