export default {
    template: `<div>
   <keep-toolbox @add='addNote'/>    
   <note-list :notes="this.notes" @delete='deleteNote'/>
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
            noteService.addEmptyNote(type)
            noteService.query()
                .then(notes => this.notes = notes)
        },


        deleteNote(id) {
            noteService.deleteNote(id)
            noteService.query()
                .then(notes => this.notes = notes)
        }

    },
    components: {
        noteList,
        keepToolbox,
    }
}