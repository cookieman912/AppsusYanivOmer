import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const NOTES_KEY = 'notes'

const gNotes = _createNotes();
export const noteService = {
    query,
    getById,
    getNextId,
    getPrevId,
}

function query() {
    return storageService.query(NOTES_KEY);
}

function reviewQuery() {
    return storageService.query(REVIEW_KEY);
}

function addReview(review) {
    gReviews.push(review)
    utilService.saveToStorage(REVIEW_KEY, gReviews);
}

function _createReviews() {
    let reviews = utilService.loadFromStorage(REVIEW_KEY)
    if (!reviews || !reviews.length) {
        reviews = [];
    }
    return reviews

}

function remove(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId);
    gBooks.splice(idx, 1);
    utilService.saveToStorage(BOOKS_KEY, gBooks);
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
    console.log(currNote.id)
    let nextIdx = gNotes.findIndex(note => note.id === currNote.id) - 1
    if (nextIdx < 0)
        nextIdx = gNotes.length - 1;
    console.log(gNotes[nextIdx].id)
    return gNotes[nextIdx].id;

}

function addBook(book) {

    console.log('in function');
    const newBook = {
        id: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.author,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        pageCount: book.volumeInfo.pageCount,
        categories: book.volumeInfo.categories,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        language: book.volumeInfo.language,
        listPrice: {
            amount: 109,
            currencyCode: "EUR",
            isOnSale: false
        }
    }

    console.log(book)
    gBooks.push(newBook)
    console.log(newBook);


    utilService.saveToStorage(BOOKS_KEY, gBooks)

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