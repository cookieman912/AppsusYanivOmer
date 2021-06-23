export default {
    props: ['email'],
    template: `
            <li class="email-preview">     
                <img v-if="email.isRead" src="img/read.png">
                <img v-else src="img/unread.png">
                <div class="preview-text">
                    <div>{{email.userName}}</div>
                    <router-link :to="'/mail/' + email.id">
                        <div class="subject">{{email.subject}}</div>
                    </router-link>
                        <div><span>Sent:</span> {{email.sentAt}}</div>
                    </div> 
             </li>
    `,
    created() {
        this.email.userName = this.email.from.substr(0, this.email.from.indexOf('@'));
    }
}