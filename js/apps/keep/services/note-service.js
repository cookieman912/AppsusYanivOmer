import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = 'notes'

const gNotes = _createNotes();
export const noteService = {
    query,
    getById,
    getNextId,
    getPrevId,
    addEmptyNote,
    deleteNote,
    editNote,
}

function query() {
    return storageService.query(NOTES_KEY);
}




function editNote(noteToChange) {
    const idxToChange = gNotes.findIndex(note => note.id === noteToChange.id)
    console.log(noteToChange)
    gNotes[idxToChange] = noteToChange;
    utilService.saveToStorage(NOTES_KEY, gNotes)

}

function deleteNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    utilService.saveToStorage(NOTES_KEY, gNotes);
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
                isPinned: false,
                info: {
                    title: 'note',
                    txt: "default",
                    id: utilService.makeId()
                },
                style: { bgc: '#000000' },
            }, );
            break;

        case 'image':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "/js/apps/keep/img/default.png.png",
                    title: "Me playing Mi"
                },
                style: { bgc: '#000000' },
            })
            break;

        case 'todos':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    title: "How was it:",
                    todos: [
                        { txt: "Do that", isDone: false, id: utilService.makeId(), },
                        { txt: "Do this", isDone: false, id: utilService.makeId(), }
                    ]

                },
                style: { bgc: '#000000' },
            })
            break;

        case 'video':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteVideo",
                isPinned: false,
                info: {
                    url: "defaultvideourl",
                    title: "Me playing Mi"
                },
                style: {
                    bgc: '#000000'
                }
            }, )

            break;
    }

    utilService.saveToStorage(NOTES_KEY, gNotes)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);


    if (!notes || !notes.length) {
        console.log('resolving to default notes');
        notes = [{
                id: utilService.makeId(),
                type: "NoteTxt",
                isPinned: true,
                info: {
                    title: 'note',
                    txt: "Fullstack Me Baby!"
                },
                style: { bgc: '#000000' },
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "/js/apps/keep/img/default.png.png",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                },
                style: { bgc: '#000000' },
            },

            {
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    title: "How was it:",
                    todos: [
                        { txt: "Do that", isDone: false, id: utilService.makeId() },
                        { txt: "Do this", isDone: false, id: utilService.makeId() }
                    ]
                },
                style: { bgc: '#000000' },
            }
        ]
    }


    utilService.saveToStorage(NOTES_KEY, notes)
    return notes;

}