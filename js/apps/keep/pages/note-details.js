import { noteService } from "../services/note-service.js"
import { utilService } from "../../../services/util-service.js"

export default {

    template: ` 

    
    
<div  class="note-details">  

<div v-if="isNull" class='note-text'> loading </div>

<div ref="note-Container" v-else-if="isText" v-bind:style="note.style" class='note note-text'> 

<router-link to="/keep"> <button>exit</button> </router-link> 

  <form @submit.prevent="editNote">

  <input v-bind:style="note.style" class="title" v-model="note.info.title" type="Text" id="title">

  <textarea v-bind:style="note.style" class="text-input" v-model="note.info.txt"> {{note.info.txt}}</textarea>

 
  <div class="color-picker">

<button type="button" class="disable icon-button">

       <label class="label-icon" for="bgc">
      <img class="paintbrush" src="js/apps/keep/img/paintbrush.png" alt="paint"> </label></button>
      <input class="background-color" v-model="note.style.backgroundColor"     type="color"  
    v-on:input="note.style.backgroundColor= $event.target.value" id="bgc">

 
   </div>

   <button class="save-button">save</button> 
 </form > 


</div>

<div v-else-if="isImage" v-bind:style="note.style" class='note note-image-container'> 

<router-link to="/keep"> <button>exit</button> </router-link>

<img v-bind:src=note.info.url class="note-image" alt="">

<form @submit.prevent="editNote">   
     <input class="title" v-model="note.info.title" type="Text" id="title"> 

 
   <input  v-model="note.info.url" type="Text" id="url">
   
   <label for="url">Image URL</label> 

   <div class="color-picker">
   <button type="button" class="disable icon-button">

    <label class="label-icon" for="bgc">
    <img class="paintbrush" src="js/apps/keep/img/paintbrush.png" alt="paint"> </label></button>
    <input class="background-color" v-model="note.style.backgroundColor"     type="color"  
     v-on:input="note.style.backgroundColor= $event.target.value" id="bgc">


</div>


<button class="save-button">save</button> 
    </form > 
   
</div>





<div v-else-if="isTodo" v-bind:style="note.style" class='note note-todo'> 

<router-link to="/keep"> <button>exit</button> </router-link>

<form @submit.prevent="editNote">

<div class="todo-header">
  <input class="title" v-model="note.info.title" type="Text" id="title">


    <button @click="addTodo"> add </button>
</div>
  <ul>
    
    <li v-for="todo in note.info.todos ">

    <input  v-model="todo.txt" type="Text" id="todo">

    <button class="isDone" v-if="todo.isDone"  @click="toggleDone(todo.id)">X</button>

    <button v-else  @click="toggleDone(todo.id)">V</button>

    <button @click="deleteTodo(todo.id)">delete</button> 

    </li>

    </ul>

    <div class="color-picker">
   <button type="button" class="disable icon-button">

    <label class="label-icon" for="bgc">
    <img class="paintbrush" src="js/apps/keep/img/paintbrush.png" alt="paint"> </label></button>
    <input class="background-color" v-model="note.style.backgroundColor"     type="color"  
     v-on:input="note.style.backgroundColor= $event.target.value" id="bgc">


</div>

 
<button class="save-button">save</button> 

  </form >


</div>



<div v-else-if="isVideo" v-bind:style="note.style" class='note note-video'> 

<router-link to="/keep"> <button>exit</button> </router-link>

   <iframe   width="420" height="315" v-bind:src="videoUrl">
   </iframe>

   <form @submit.prevent="editNote">   
     <input class="title" v-model="note.info.title" type="Text" id="title"> 

 
     <input  v-model="note.info.url" type="Text" id="url">
   
    <label for="url">video URL</label> 


    <div class="color-picker">

<button type="button" class="disable icon-button">

       <label class="label-icon" for="bgc">
      <img class="paintbrush" src="js/apps/keep/img/paintbrush.png" alt="paint"> </label></button>
      <input class="background-color" v-model="note.style.backgroundColor"     type="color"  
    v-on:input="note.style.backgroundColor= $event.target.value" id="bgc">

 
   </div>




   <button class="save-button">save</button> 
     </form > 


</div>


<footer class="details-footer">
<router-link :to="'/keep/details/'+this.prevNoteId"> <button> < previous </button></router-link>
<router-link :to="'/keep/details/'+this.nextNoteId"> <button> next > </button></router-link>
</footer>

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