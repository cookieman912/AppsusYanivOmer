import notePreview from "./note-preview.js";

export default {


    props: ['notes'],
    template: `<div class="note-list"> 
<li class="note-preview" v-for="note in notes" v-bind:key="note.id" v-bind:style="note.style">
    <note-preview :note="note"/>

    <div class="button">
    <button @click= "$emit('delete', note.id)"> X </button>
    <button @click= "$emit('pin', note.id)">  <img class="" v-bind:src="note.pin.pinImage" alt="pin/unpin"> </button>
    
</div>
   
</li>
</ul>

</div>`,

    data() {
        return {

        }

    },


    computed: {


    },


    components: {
        notePreview
    }

}