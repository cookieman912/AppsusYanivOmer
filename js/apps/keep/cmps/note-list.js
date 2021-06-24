import notePreview from "./note-preview.js";

export default {
    props: ['notes'],
    template: `<div class="note-list"> 

<ul class="note-list">
<li class="note-preview" v-for="note in notes" v-bind:style="note.style">
    <note-preview :note="note"/>

    <button @click= "$emit('delete', note.id)"> X </button>
   
</li>
</ul>

</div>`,



    components: {
        notePreview
    }

}