import notePreview from "./note-preview.js";

export default {


    props: ['notes'],
    template: `<div class="note-list"> 
<li class="note-preview" v-for="note in notes" v-bind:key="note.id" v-bind:style="note.style">
    <note-preview :note="note"/>

    <div class="button">
    <button @click= "$emit('delete', note.id)"> X </button>
    <button @click= "$emit('pin', note.id)"> {{note.isPinned}} </button>
    
</div>
   
</li>
</ul>

</div>`,

    data() {
        return {
            pinnedNotes: null,
            unPinnedNotes: null,

        }

    },




    methods: {
        getPinnedNotes() {
            return notes.filter(note => note.isPinned)
        },


        getUnPinnedNotes() {
            setTimeout(() => {
                console.log(this.notes)
                return this.notes.filter(note => !note.isPinned)
            }, 500);

        },

        isNull() {
            setTimeout(() => {
                return this.note === null
            }, 1000);

        }
    },


    components: {
        notePreview
    }

}