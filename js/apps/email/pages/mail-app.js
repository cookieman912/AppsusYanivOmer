import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-serivce.js";
import emailList from "../cmps/email-list.js";
import emailStatus from "../cmps/email-status.js";
import emailFilter from "../cmps/email-filter.js";


export default {
    template: `
        <div>
            <div class="email-home">
                <aside class="nav-bar">
                    <router-link :to="'/mail/compose'">Compose</router-link>
                    <router-link :to="'/mail/main'">Inbox<email-status :emails="emails" /></router-link>
                    <router-link :to="'/mail/main'">Sent</router-link>
                </aside>
                <router-view></router-view>
            </div>
        </div>           
    `,
    data() {
        return {
            emails: null
        }
    },
    created() {
        emailService.query()
            .then((emails) => {
                this.emails = emails;
            })
        eventBus.$on('markAsRead', this.markEmail)
    },
    methods: {
        markEmail(email) {
            emailService.toggleRead(email.id)
            .then((emails) => {
                    this.emails = emails
                })
        }
    },
    components: {
        emailList,
        emailStatus,
        emailFilter
    }
}