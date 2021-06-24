export default {
    props: ['note'],
    template: ` <span class="note.title"> 
       <router-link :to="'/keep/details/'+note.id">{{noteByType}}</router-link>

</span>`,

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