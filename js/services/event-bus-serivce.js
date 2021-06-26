export const eventBus = new Vue()



export function addBook(book) {

    eventBus.$emit('addBook', book)
}