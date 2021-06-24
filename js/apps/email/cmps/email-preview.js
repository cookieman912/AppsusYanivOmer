import { eventBus } from '../../../services/event-bus-serivce.js'

export default {
    props: ['email'],
    template: `
            <li class="email-preview">     
                <img v-if="email.isRead" @click="toggleMarked" src="img/read.png">
                <img v-else @click="toggleMarked" src="img/unread.png">
                <div class="preview-text">
                    <div>{{email.userName}}</div>
                    <router-link :to="'/mail/' + email.id">
                        <div class="subject">{{email.subject}}</div>
                    </router-link>
                    <div class="li-end">
                        <div>{{email.sentAt}}</div>
                        <button @click="deleteMail">X</button>
                    </div>
                    </div> 
             </li>
    `,
    created() {
    },

    methods: {
        deleteMail() {
            const msg = {
                txt: 'E-mail deleted successfully'
            }
            eventBus.$emit('show-msg', msg);
            eventBus.$emit('deleteMail', this.email);
        },
        toggleMarked() {
            eventBus.$emit('markAsRead', this.email);
        }
    },
}