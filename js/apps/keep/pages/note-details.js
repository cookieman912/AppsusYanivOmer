import { noteService } from "../services/note-service.js"

export default {

    template: ` 

    
<div  class="note-details">  

<div v-if="isNull" class='note-text'> loading </div>

<div v-else-if="isText" class='note note-text'> 

  <form @submit.prevent="editNote">

  <input class="title" v-model="note.info.title" type="Text" id="title">

  </p> write stuff here! </p>

  <textarea class="text-input" v-model="note.info.txt"> {{note.info.txt}}</textarea>

  <button>save</button> 
 </form > 

</div>



<div v-else-if="isImage" class='note note-image-container'> 

<img v-bind:src=note.info.url class="note-image" alt="">

<form @submit.prevent="editNote">   
     <input class="title" v-model="note.info.title" type="Text" id="title"> 

 

   <input  v-model="note.info.url" type="Text" id="url">
   
   <label for="url">put a url you want to save</label> 

    <button>save</button>
    </form > 
</div>





<div v-else-if="isTodo" class='note note-todo'> {{this.note}} is todo 


</div>

<div v-else-if="isVideo" class='note note-Video'> {{this.note}} is Video 


</div>


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


    computed: {
        isText() {
            console.log(this.note.type)
            return (this.note.type === 'NoteTxt')
        },

        isTodo() {
            return (this.note.type === 'NoteTodos')
        },

        isImage() {
            return (this.note.type === 'NoteImg')
        },

        isVideo() {
            return (this.note.type === 'NoteVideo')
        },

        isNull() {
            if (this.note === null) return true;;
        }

    },


    methods: {
        editNote() {
            console.log(this.note)
            noteService.editNote(this.note)
            noteService.query()
                .then(notes => console.log(notes))
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