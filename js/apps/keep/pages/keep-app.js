export default {
    template: `<div>
<<<<<<< HEAD
<h1> im a keep </h1>  
   </div>           
`,
=======
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
>>>>>>> 84dfb8d827f4eb2a2f932a1df1420fb77dfdd663
}