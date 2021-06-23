import { emailService } from "../services/email-service.js"
import emailList from "../cmps/email-list.js";


export default {
    template: `
        <div class="email-home">
            <aside class="nav-bar">
                <button class="compose">Compose</button>
                <button>Inbox</button>
                <button>Starred</button>
                <button>Sent</button>
            </aside>
            <email-list :emails="emails" />
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
        });
    },
    components: {
        emailList
    }
}