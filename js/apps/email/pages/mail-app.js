import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-serivce.js";
import emailList from "../cmps/email-list.js";
import emailStatus from "../cmps/email-status.js";
import emailFilter from "../cmps/email-filter.js";


export default {
    template: `
        <div>
            <email-filter @filtered="setFilter" />
            <div class="email-home">
                <aside class="nav-bar">
                    <router-link :to="'/mail/compose'">Compose</router-link>
                    <router-link :to="'/mail'">Inbox<email-status :emails="emails" /></router-link>
                    <router-link :to="'/mail'">Starred</router-link>
                    <router-link :to="'/mail'">Sent</router-link>
                </aside>
                <email-list :emails="mailsToShow" />
            </div>
        </div>           
    `,
    data() {
        return {
            emails: null,
            filterBy: null
        }
    },
    created() {
        emailService.query()
            .then((emails) => {
                this.emails = emails;
            })
        eventBus.$on('deleteMail', this.deleteMail)
        eventBus.$on('markAsRead', this.markEmail)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        deleteMail(email) {
            emailService.removeEmail(email.id)
                .then((emails) => {
                    this.emails = emails
                })
        },
        markEmail(email) {
            emailService.toggleRead(email.id)
            .then((emails) => {
                    this.emails = emails
                })
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.emails;
            const searchStr = this.filterBy.email.toLowerCase();
            const emailsToShow = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(searchStr);
            });
            return emailsToShow;
        }
    },


    components: {
        emailList,
        emailStatus,
        emailFilter
    }
}