export default {
    props: ['note'],
    template: ` <div class="note-preview"> 
       <router-link :to="'/keep/details/'+note.id"> {{note}}</router-link>

    </div>`,



}