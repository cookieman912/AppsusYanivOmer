import { emailService } from "../services/email-service.js"
import emailList from "../cmps/email-list.js";
import emailStatus from "../cmps/email-status.js";
import emailFilter from "../cmps/email-filter.js";


export default {
    template: `
        <div>
            <email-filter @filtered="setFilter" />
            <div class="email-home">
                <aside class="nav-bar">
                    <router-link :to="'/mail'">Compose</router-link>
                    <router-link :to="'/mail'">Inbox<email-status :emails="emails" /></router-link>
                    <router-link :to="'/mail'">Starred</router-link>
                    <router-link :to="'/mail'">Sent</router-link>
                </aside>
                <email-list :emails="emails" />
                <router-view></router-view>
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
        });
    },
    methods: {  
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    components: {
        emailList,
        emailStatus,
        emailFilter
    }
}