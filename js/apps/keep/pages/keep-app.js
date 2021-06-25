import { noteService } from "../services/note-service.js"
import keepToolbox from "../cmps/keep-toolbox.js"
import noteList from "../cmps/note-list.js"


export default {
    template: `<div class=main>
   <keep-toolbox @add='addNote' @filter='filterBy' />    
   <note-list :notes="this.filteredNotes" @delete='deleteNote' @pin='pinNote' />

   </div>           
`,

    data() {
        return {
            notes: null,
            pinnedNotes: null,
            unPinnedNotes: null,
            filteredNotes: null,
            filter: { text: '' }
        }
    },

    computed: {

    },


    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.filteredNotes = this.notes
                this.pinnedNotes = this.getPinnedNotes()
                this.unPinnedNotes = this.getUnpinnedNotes()
            })
    },

    methods: {
        addNote(noteToAdd) {
            noteService.addNote(noteToAdd)
            noteService.query()
                .then(
                    notes => {
                        this.notes = notes;
                        this.filterBy(this.filter)
                    })
        },


        deleteNote(id) {
            noteService.deleteNote(id)
            noteService.query()
                .then(notes => {
                    this.notes = notes;
                    this.filterBy(this.filter)
                })
        },

        pinNote(id) {
            noteService.pinNote(id)
            noteService.query()
                .then(notes => {
                    this.notes = notes;
                    this.filterBy(this.filter)
                })
        },

        filterBy(filter) {
            this.filteredNotes = (this.notes.filter(note => note.info.title.toLowerCase().includes(filter.text.toLowerCase())))
            console.log(this.filteredNotes)
            this.pinnedNotes = this.getPinnedNotes()
            this.unPinnedNotes = this.getUnpinnedNotes()
            this.filteredNotes = this.pinnedNotes.concat(this.unPinnedNotes)
            console.log(this.filteredNotes)
        },

        getPinnedNotes() {
            console.log(this.filteredNotes.filter(note => note.isPinned))
            return this.filteredNotes.filter(note => note.isPinned)
        },
        getUnpinnedNotes() {
            console.log(this.filteredNotes.filter(note => !note.isPinned))
            return this.filteredNotes.filter(note => !note.isPinned)
        },


    },
    components: {
        noteList,
        keepToolbox,
    }
}