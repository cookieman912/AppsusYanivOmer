import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = 'notes'

const gNotes = _createNotes();
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
    return storageService.query(NOTES_KEY);
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
                    pinImage: "/js/apps/keep/img/pin.png"
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
                    pinImage: "/js/apps/keep/img/pin.png"
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
                    pinImage: "/js/apps/keep/img/pin.png"
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
                    pinImage: "/js/apps/keep/img/pin.png"
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
            gNotes.push(note)
            return query()
        })



}

function editNote(noteToChange) {
    const idxToChange = gNotes.findIndex(note => note.id === noteToChange.id)
    return storageService.put(NOTES_KEY, noteToChange)

}

function pinNote(noteId) {
    const noteToChange = gNotes.find(note => note.id === noteId);
    noteToChange.pin.isPinned = !noteToChange.pin.isPinned
    if (noteToChange.pin.isPinned) noteToChange.pin.pinImage = '/js/apps/keep/img/unpin.png'
    else noteToChange.pin.pinImage = "/js/apps/keep/img/pin.png"
    return storageService.put(NOTES_KEY, noteToChange)
        .then(note => {
            return query()
        })

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
    let nextIdx = gNotes.findIndex(note => note.id === currNote.id) + 1
    if (nextIdx > gNotes.length - 1)
        nextIdx = 0;
    return gNotes[nextIdx].id;
}

function getPrevId(currNote) {
    let nextIdx = gNotes.findIndex(note => note.id === currNote.id) - 1
    if (nextIdx < 0)
        nextIdx = gNotes.length - 1;
    return gNotes[nextIdx].id;

}

function addEmptyNote(type) {

    switch (type) {
        case 'text':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteTxt",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    title: 'note',
                    txt: "default",
                    id: utilService.makeId()
                },
                style: { backgroundColor: '#999999' },
            });
            break;

        case 'image':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteImg",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    url: "/js/apps/keep/img/default.png.png",
                    title: "Me playing Mi"
                },
                style: { backgroundColor: '#999999' },
            })
            break;

        case 'todos':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteTodos",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    title: "How was it:",
                    todos: [
                        { txt: "Do that", isDone: false, id: utilService.makeId(), },
                        { txt: "Do this", isDone: false, id: utilService.makeId(), }
                    ]

                },
                style: { backgroundColor: '#999999' },
            })
            break;

        case 'video':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteVideo",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    url: "defaultvideourl",
                    title: "Me playing Mi"
                },
                style: { backgroundColor: '#999999' },
            })

            break;
    }

    utilService.saveToStorage(NOTES_KEY, gNotes)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);


    if (!notes || !notes.length) {
        notes = [{
                id: utilService.makeId(),
                type: "NoteTxt",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    title: 'note',
                    txt: "Fullstack Me Baby!"
                },
                style: { backgroundColor: '#999999' },
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                pin: {
                    isPinned: false,
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    url: "/js/apps/keep/img/default.png.png",
                    title: "Me playing Mi"
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
                    pinImage: "/js/apps/keep/img/pin.png"
                },
                info: {
                    title: "How was it:",
                    todos: [
                        { txt: "Do that", isDone: false, id: utilService.makeId() },
                        { txt: "Do this", isDone: false, id: utilService.makeId() }
                    ]
                },
                style: { backgroundColor: '#999999' },
            }
        ]
    }


    utilService.saveToStorage(NOTES_KEY, notes)
    return notes;

}