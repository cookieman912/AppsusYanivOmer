import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus-serivce.js";

export default {
    template: `
    <div v-if="!email">Loading...</div>
    <div v-else class="email-details">
        <div class="head-container">
            <h3>Subject:&nbsp;&nbsp;{{email.subject}}</h3>
            <div class="compose-buttons">
            <router-link :to="'/mail/main'"> <button @click="deleteMail"><img src="img/trash.png"></button> </router-link>
            <router-link :to="'/mail/main'"> <button><img src="img/return.png"></button> </router-link>
        </div>
        </div>
        <div class="user-name">
            <h5>From:&nbsp;&nbsp;{{email.userName}}</h5>
            <h5>{{email.sentAt}}</h5>
        </div>     
        <h5> {{email.from}}</h5>
        <p>{{email.body}}</p>
    </div>    
        `,

    data() {
        return {
            email: null
        }
    },

    methods: {
        deleteMail() {
            emailService.removeEmail(this.email.id)
            const msg = {
                txt: 'E-mail deleted successfully'
            }
            eventBus.$emit('show-msg', msg);
        }
    },

    created() {
    },

    watch: {
        '$route.params.emailId': {
            immediate: true,
            handler() {
                const { emailId } = this.$route.params;
                emailService.getById(emailId)
                    .then((email) => {
                        this.email = email;
                        eventBus.$emit('markAsRead', this.email);
                    });
                }
            },
    },
}