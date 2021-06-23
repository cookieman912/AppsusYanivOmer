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
}

function query() {
    return storageService.query(NOTES_KEY);
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
                    txt: "default"
                }
            }, );
            break;

        case 'image':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "img/default",
                    title: "Me playing Mi"
                }
            })
            break;

        case 'todos':
            gNotes.push({
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
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
                    backgroundColor: "#00d"
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
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "http://some-img/me",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },

            {
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
        ]
    }


    utilService.saveToStorage(NOTES_KEY, notes)
    return notes;

}


function getEmptyBook() {
    return {

    };
}