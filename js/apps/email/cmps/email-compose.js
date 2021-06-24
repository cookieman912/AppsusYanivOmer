import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus-serivce.js";

export default {
    template: `
        <form @submit.prevent="submitEmail" class="email-compose">
            <div class="subject-container">
                <input type="text" placeholder="Subject:">
                <router-link :to="'/mail/main'"> <button class="return-button"><img src="img/return.png"></button> </router-link>
            </div>
            <textarea rows="15" placeholder="Enter your e-mail here..."></textarea>
            <button>send</button>
        </form>
    `,
    methods: {
        submitEmail(ev) {
            const subject = ev.path[0][0].value;
            const body = ev.path[0][1].value;
            emailService.sendEmail(subject, body);
            this.$router.push('/mail/main');
            const msg = {
                txt: 'E-mail Sent successfully'
            }
            eventBus.$emit('show-msg', msg);
        }
    }
};