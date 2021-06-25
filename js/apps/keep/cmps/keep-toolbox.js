export default {
    template: ` <header class="keep-header"> 

        <h3> search notes </h3>
        
        
         <input v-model="filterBy.text" @input="$emit('filter',filterBy) " type="text"> 


       <h2> choose note type </h2>
      <nav class="note-add-options">
         <button @click= "changeType('NoteTxt')"> text </button>

         <button @click= "changeType('NoteImg')"> image </button>

         <button @click= "changeType('NoteVideo')"> video </button>

         <button @click= "changeType('NoteTodos')"> todos </button>
       </nav> 
 
       <form @submit.prevent="$emit('add',noteToAdd)">

       <div class=new-note-details>

            <label for="noteTitle"> <h3>write your title!</h3> </label>

            <input v-model="noteToAdd.info.title" type="text" id="noteTitle"> 

            <label for="noteInfo"> <h3>{{inputByType}}</h3> </label>

    
          <input v-model="noteToAdd.info.content" type="text" id="noteInfo"> 

       </div>
          
        <button>add note!</button> 

        </form>

          </header>`,

    data() {
        return {
            filterBy: {
                text: ''
            },

            noteToAdd: {
                type: 'NoteTxt',
                info: {
                    title: '',
                    content: ''
                }

            }
        }
    },


    computed: {
        inputByType() {
            switch (this.noteToAdd.type) {
                case 'NoteTxt':
                    return 'add text here!'
                case 'NoteImg':
                    return 'add image URL here!'

                case 'NoteVideo':
                    return 'add youtube Url Here!'

                case 'NoteTodos':

                    return 'add tasks seperated by commas here!'

            }

        }
    },

    methods: {
        changeType(type) {
            this.noteToAdd.type = type;
        },
    }



}