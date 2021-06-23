import { noteService } from "../services/note-service.js"

export default {

    template: ` 
<div class="note-details">{{note}} 
<router-link :to="'/keep/details/'+this.prevNoteId"> <button> < previous </button></router-link>
<router-link :to="'/keep/details/'+this.nextNoteId"> <button> next > </button></router-link>



</div>`,

    data() {
        return {
            note: null,
            nextNoteId: null,
            prevNoteId: null
        }
    },
    watch: {
        '$route.params.noteId': {
            immediate: true,
            handler() {
                const { noteId } = this.$route.params;
                noteService.getById(noteId)
                    .then(note =>
                        this.note = note)
                    .then(note => {
                        this.nextNoteId = noteService.getNextId(note)
                    })
                    .then(note => {
                        this.prevNoteId = noteService.getPrevId(this.note)
                    })
            }
        },
    },



}