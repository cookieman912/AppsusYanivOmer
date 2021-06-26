import { eventBus } from "../../../services/event-bus-serivce.js";

export default {
    props: ['email'],
    template: `
        <li class="outbox-preview">     
                <div class="prev-user">{{email.userName}}</div>
                <router-link class="prev-subject" :to="'/mail/' + email.id">
                        {{email.subject}}
                </router-link>
                <div class="li-end">
                    <div class="prev-date">{{email.sentAt}}</div>
                    <button class="prev-delete" @click="deleteMail">X</button>
                </div>
        </li>
    `,
    methods: {
        deleteMail() {
            const msg = {
                txt: 'E-mail deleted successfully'
            }
            eventBus.$emit('show-msg', msg);
            eventBus.$emit('deleteOutboxMail', this.email);
        },
    }
}