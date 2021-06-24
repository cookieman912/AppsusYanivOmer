import { noteService } from "../services/note-service.js"
import keepToolbox from "../cmps/keep-toolbox.js"
import noteList from "../cmps/note-list.js"


export default {
    template: `<div>
   <keep-toolbox @add='addNote' @filter='filterBy' />    
   <note-list :notes="this.filteredNotes" @delete='deleteNote'/>
   </div>           
`,

    data() {
        return {
            notes: null,
            filteredNotes: null,
            filter: { text: '' }
        }
    },

    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.filteredNotes = this.notes
            })
    },

    methods: {
        addNote(type) {
            noteService.addEmptyNote(type)
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

        filterBy(filter) {
            this.filteredNotes = (this.notes.filter(note => note.info.title.toLowerCase().includes(filter.text.toLowerCase())))
            this.filter = filter;
        },

    },
    components: {
        noteList,
        keepToolbox,
    }
}