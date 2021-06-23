import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.js"
import keepToolbox from "../cmps/keep-toolbox.js"


export default {
    template: `<div>
   <keep-toolbox @add='addNote'/>    
   <note-list :notes="this.notes"/>
   </div>           
`,

    data() {
        return {
            notes: null
        }
    },

    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },

    computed: {
        noteInfo() { return 'placeholder' }
    },
    methods: {
        addNote(type) {
            console.log(type)
        }
    },
    components: {
        noteList,
        keepToolbox,
    }
}