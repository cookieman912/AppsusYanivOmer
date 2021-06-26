import { eventBus } from '../../../services/event-bus-serivce.js'

export default {
    props: ['email'],
    template: `
            <li class="email-preview">     
                <img class="prev-img" v-if="email.isRead" @click="toggleMarked" src="img/read.png">
                <img class="prev-img" v-else @click="toggleMarked" src="img/unread.png">
                <div class="preview-text">
                    <div class="prev-user">{{email.userName}}</div>
                    <router-link class="prev-subject" :to="'/mail/' + email.id">
                        {{email.subject}}
                    </router-link>
                    <div class="li-end">
                        <div class="prev-date">{{email.sentAt}}</div>
                        <button class="prev-delete" @click="deleteMail">X</button>
                    </div>
                    </div> 
             </li>
    `,
    created() {
        eventBus.$emit('renderEmails');
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