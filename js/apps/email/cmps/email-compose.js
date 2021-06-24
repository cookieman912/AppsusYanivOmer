import { emailService } from "../services/email-service.js";

export default {
    template:`
        <form @submit.prevent="submitEmail" class="email-compose">
            <input type="text" placeholder="Subject:">
            <textarea rows="15" placeholder="Enter your e-mail here..."></textarea>
            <button>send</button>
        </form>
    `,
    methods: {
        submitEmail(ev) {
           const subject = ev.path[0][0].value;
           const body = ev.path[0][1].value;
           emailService.sendEmail(subject, body);
           this.$router.push('/mail');
        }
    }
};