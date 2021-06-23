import { emailService } from "../services/email-service.js";

export default {
    template: `
    <div v-if="!email">Loading...</div>
    <div v-else class="email-details">
        <div class="head-container">
            <h3>{{email.subject}}</h3>
           <router-link :to="'/mail'"> <button @click="deleteMail">Delete</button> </router-link>
        </div>
            <h5>{{email.userName}}---{{email.from}}</h5>
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
        }
    },

    created () {
    },
    
    watch: {
        '$route.params.emailId': {
            immediate: true,
            handler() {
                const { emailId } = this.$route.params;
                emailService.getById(emailId)
                .then((email) => {
                    this.email = email
                    emailService.markAsRead(this.email.id)
                })
            }
        },
    },
}