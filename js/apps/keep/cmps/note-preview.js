export default {
    props: ['note'],
    template: ` <div v-bind:style="note.style"> 
       <router-link :to="'/keep/details/'+note.id"> {{noteByType}}</router-link>

    </div>`,

    computed: {
        noteByType() {
            switch (this.note.type) {
                case 'NoteTxt':
                    return this.note.info.title
                case 'NoteImg':
                    return this.note.info.title

                case 'NoteVideo':
                    return this.note.info.title

                case 'NoteTodos':
                    console.log(this.note)
                    return this.note.info.title

            }
        }

    }



}