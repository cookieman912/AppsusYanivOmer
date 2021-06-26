export default {
    props: ['note'],
    template: ` <span class="note.title"> 
       <router-link :to="'/keep/details/'+note.id">{{note.info.title}} - {{noteByType}} note </router-link>

</span>`,

    computed: {
        noteByType() {
            switch (this.note.type) {
                case 'NoteTxt':
                    return 'text'
                case 'NoteImg':
                    return 'image'

                case 'NoteVideo':
                    return 'video'

                case 'NoteTodos':
                    return 'todos'

            }
        }

    }



}