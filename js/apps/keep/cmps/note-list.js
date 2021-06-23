import notePreview from "./note-preview.js";

export default {
    props: ['notes'],
    template: `<div class="note-list"> <h1> welcome to note-list!</h1> 

<ul>
<li v-for="note in notes">
    <note-preview :note="note"/>

   
</li>
</ul>

</div>`,



    components: {
        notePreview
    }

}