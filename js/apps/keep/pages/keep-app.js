import { noteService } from "../services/note-service.js"
import { eventBus } from "../../../services/event-bus-serivce.js"
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


    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.filteredNotes = this.notes
                this.filterBy('')
            })
    },

    methods: {
        addNote(noteToAdd) {
            noteService.addNote(noteToAdd)
                .then(
                    notes => {
                        this.notes = notes;
                        this.filterBy(this.filter)
                    })
        },


        deleteNote(id) {
            noteService.deleteNote(id)
                .then(notes => {
                    this.notes = notes;
                    this.filterBy(this.filter)
                    const msg = { txt: 'Note deleted' }
                    eventBus.$emit('show-msg', msg);
                })
        },

        pinNote(id) {

            noteService.pinNote(id)
                .then(notes => {
                    this.notes = notes;
                    this.filterBy(this.filter)

                })
            const msg = { txt: 'Note pinned' }
            eventBus.$emit('show-msg', msg);

        },

        filterBy(filter) {
            if (filter)
                this.filteredNotes = (this.notes.filter(note => note.info.title.toLowerCase().includes(filter.text.toLowerCase())))

            this.pinnedNotes = this.getPinnedNotes()
            this.unPinnedNotes = this.getUnpinnedNotes()
            this.filteredNotes = this.pinnedNotes.concat(this.unPinnedNotes)

        },

        getPinnedNotes() {

            return this.filteredNotes.filter(note => note.pin.isPinned)
        },
        getUnpinnedNotes() {

            return this.filteredNotes.filter(note => !note.pin.isPinned)
        },


    },
    components: {
        noteList,
        keepToolbox,
    }
}