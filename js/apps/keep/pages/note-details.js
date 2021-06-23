import { noteService } from "../services/note-service.js"
import { utilService } from "../../../services/util-service.js"

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





<div v-else-if="isTodo" class='note note-todo'> 

<form @submit.prevent="editNote">

  <input class="title" v-model="note.info.title" type="Text" id="title">

  '</p> write todos here! </p>'
<button @click="addTodo"> add </button>
  <ul>
    
    <li v-for="todo in note.info.todos ">
    <input  v-model="todo.txt" type="Text" id="todo">

    <button v-if="todo.isDone"  @click="toggleDone(todo.id)">X</button>

    <button v-else  @click="toggleDone(todo.id)">V</button>

    <button @click="deleteTodo(todo.id)">delete</button> 

    </li>
    </ul>
  <button>save</button> 
 </form >


</div>

<div v-else-if="isVideo" class='note note-Video'> 


<iframe   width="420" height="315" v-bind:src="videoUrl">
</iframe>

<form @submit.prevent="editNote">   
     <input class="title" v-model="note.info.title" type="Text" id="title"> 

 

   <input  v-model="note.info.url" type="Text" id="url">
   
   <label for="url">put a url you want to save</label> 

    <button>save</button>
    </form > 


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
        },
        videoUrl() {
            if (this.note.info.url !== null) {

                const videoUrl = this.note.info.url.replace('watch?v=', 'embed/')
                return videoUrl;


                // "https://www.youtube.com/watch?v=pRziGchtkFE"
                // return `https://www.youtube.com/embed/${this.note.info.url}`
            }
        }


    },


    methods: {
        editNote() {
            noteService.editNote(this.note)
            noteService.query()
        },


        toggleDone(id) {
            let idxToChange = this.note.info.todos.findIndex(todo => todo.id === id)
            this.note.info.todos[idxToChange].isDone = !this.note.info.todos[idxToChange].isDone
        },

        deleteTodo(id) {
            let idxToChange = this.note.info.todos.findIndex(todo => todo.id === id)
            this.note.info.todos.splice(idxToChange, 1)

        },

        addTodo() {
            this.note.info.todos.push({ txt: "Do that", isDone: false, id: utilService.makeId(), }, )
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