const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

console.log('start----');

yargs.command({
    command: 'add',
    describe: 'adding notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOptoin: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'remove this title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'lists',
    describe: 'list Notes',
    handler() {
        notes.getNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'the title note to read',
            demandOpetion: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.argv