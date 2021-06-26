import emailFilter from "./email-filter.js";
import outboxList from "./outbox-list.js";
import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-serivce.js";

export default {
    template: `
        <div v-if="emails" class="main-list">
            <email-filter @filtered="setFilter" />
            <outbox-list :emails="mailsToShow" /> 
        </div>
        <h2 v-else> No E-mails in your outbox</h2>
    `,
    data() {
        return {
            emails: null,
            filterBy: null
        }
    },
    created() {
        emailService.queryOutbox()
            .then((emails) => {
                this.emails = emails;
            })
        eventBus.$on('deleteOutboxMail', this.deleteMail)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        deleteMail(email) {
            emailService.removeOutboxEmail(email.id)
                .then((emails) => {
                    this.emails = emails
                })
        },
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
        emailFilter,
        outboxList
    }
}