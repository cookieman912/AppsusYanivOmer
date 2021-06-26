import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = 'notes'

export const noteService = {
    query,
    getById,
    getNextId,
    getPrevId,
    addNote,
    deleteNote,
    editNote,
    pinNote,
}

function query() {
    return _createNotes();
}


function addNote(noteToAdd) {

    let newNote;
    switch (noteToAdd.type) {
        case 'NoteTxt':
            newNote = {
                id: utilService.makeId(),
                type: "NoteTxt",
                pin: {
                    isPinned: false,
                    pinImage: "js/apps/keep/img/pin.png"
                },
                info: {
                    title: noteToAdd.info.title,
                    txt: noteToAdd.info.content,
                },
                style: { backgroundColor: '#999999' },
            };
            break;

        case 'NoteImg':
            newNote = {
                id: utilService.makeId(),
                type: "NoteImg",
                pin: {
                    isPinned: false,
                    pinImage: "js/apps/keep/img/pin.png"
                },
                info: {
                    title: noteToAdd.info.title,
                    url: noteToAdd.info.content,
                },
                style: { backgroundColor: '#999999' },
            };
            break;

        case 'NoteTodos':
            const toDolist = noteToAdd.info.content.split(',').map(todo => {
                return { txt: todo, isDone: false, id: utilService.makeId(), }
            })
            newNote = {
                id: utilService.makeId(),
                type: "NoteTodos",
                pin: {
                    isPinned: false,
                    pinImage: "js/apps/keep/img/pin.png"
                },
                info: {
                    title: noteToAdd.info.title,
                    todos: toDolist,
                },
                style: { backgroundColor: '#999999' },

            };
            break;

        case 'NoteVideo':
            newNote = {
                id: utilService.makeId(),
                type: "NoteVideo",
                pin: {
                    isPinned: false,
                    pinImage: "js/apps/keep/img/pin.png"
                },
                info: {
                    title: noteToAdd.info.title,
                    url: noteToAdd.info.content,
                },
                style: { backgroundColor: '#999999' },
            };


            break;
    }
    return storageService.post(NOTES_KEY, newNote)
        .then(note => {
            return query()
        })



}

function editNote(noteToChange) {
    return storageService.put(NOTES_KEY, noteToChange)

}

function pinNote(noteId) {
    let noteToChange
    return storageService.get(NOTES_KEY, noteId).then(note => {
        noteToChange = note;
        noteToChange.pin.isPinned = !noteToChange.pin.isPinned

        if (noteToChange.pin.isPinned) noteToChange.pin.pinImage = 'js/apps/keep/img/unpin.png'

        else noteToChange.pin.pinImage = "js/apps/keep/img/pin.png"

        return storageService.put(NOTES_KEY, noteToChange)
            .then(note => {
                return query()
            })
    });



}

function deleteNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(book) {
    book.id = utilService.makeId();
    gBooks.unshift(book);
    utilService.saveToStorage(BOOKS_KEY, gBooks);
}

function getById(idToFind) {
    return storageService.get(NOTES_KEY, idToFind)
}

function getNextId(currNote) {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            const nextIdx = notes.findIndex(note => {
                return currNote.id === note.id
            })
            if (nextIdx + 1 === notes.length)
                return notes[0].id;
            else
                return notes[nextIdx + 1].id
        })
}

function getPrevId(currNote) {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            const nextIdx = notes.findIndex(note => {
                return currNote.id === note.id
            })
            if (nextIdx - 1 <= 0)
                return notes[notes.length - 1].id;
            else
                return notes[nextIdx - 1].id
        })

}



function _createNotes() {
    let notes;
    return (storageService.query(NOTES_KEY)).then(broughtNotes => {
        notes = broughtNotes;

        if (!notes || !notes.length) {
            notes = [{
                    id: utilService.makeId(),
                    type: "NoteTxt",
                    pin: {
                        isPinned: false,
                        pinImage: "js/apps/keep/img/pin.png"
                    },
                    info: {
                        title: 'default text',
                        txt: "default mc default"
                    },
                    style: { backgroundColor: '#999999' },
                },
                {
                    id: utilService.makeId(),
                    type: "NoteImg",
                    pin: {
                        isPinned: false,
                        pinImage: "js/apps/keep/img/pin.png"
                    },
                    info: {
                        url: "js/apps/keep/img/default.png.png",
                        title: "yaniv's D&D character"
                    },
                    style: {
                        backgroundColor: "#00d"
                    },
                    style: { backgroundColor: '#999999' },
                },

                {
                    id: utilService.makeId(),
                    type: "NoteTodos",
                    pin: {
                        isPinned: false,
                        pinImage: "js/apps/keep/img/pin.png"
                    },
                    info: {
                        title: "default todos",
                        todos: [
                            { txt: "Do that", isDone: false, id: utilService.makeId() },
                            { txt: "Do this", isDone: false, id: utilService.makeId() }
                        ]
                    },
                    style: { backgroundColor: '#999999' },
                },
                {
                    id: utilService.makeId(),
                    type: "NoteVideo",
                    pin: {
                        isPinned: false,
                        pinImage: "js/apps/keep/img/pin.png"
                    },
                    info: {
                        title: 'default video',
                        url: 'https://www.youtube.com/watch?v=pHXDMe6QV-U',
                    },
                    style: { backgroundColor: '#999999' },
                },
            ]
            return storageService.postMany(NOTES_KEY, notes).then(notesToBring => {


                return notesToBring
            })
        }




        return notes;
    })


}