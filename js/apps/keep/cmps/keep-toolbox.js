export default {
    template: ` <header class="keep-header">  
        <h3> search notes </h3>
        
        
         <input v-model="filterBy.text" @input="$emit('filter',filterBy) " type="text"> 


       <h2> add Note! </h2>

       <button @click= "$emit('add', 'text')"> text </button>

       <button @click= "$emit('add', 'image')"> image </button>

       <button @click= "$emit('add', 'video')"> video </button>

       <button @click= "$emit('add', 'todos')"> todos </button>

          </header>`,

    data() {
        return {
            filterBy: {
                text: ''
            },
            type: 'text'
        }
    }


}