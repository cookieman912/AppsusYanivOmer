import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-serivce.js";
import emailList from "./email-list.js";
import emailStatus from "./email-status.js";
import emailFilter from "./email-filter.js";

export default {
    template: `
    <div class="main-list">
        <email-filter @filtered="setFilter" />
        <email-list :emails="mailsToShow" />         
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