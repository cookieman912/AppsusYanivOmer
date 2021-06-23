export const eventBus = new Vue()

export function addBook(book) {
    console.log(book)
    eventBus.$emit('addBook', book)
}