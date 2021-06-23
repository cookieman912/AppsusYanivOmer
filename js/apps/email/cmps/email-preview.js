export default {
    props: ['email'],
    template: `
        <li class="email-preview">

            <img v-if="email.isRead" src="img/read.png">

            <img v-else src="img/unread.png">

            <div>{{email.from}}</div>

            <div class="subject">{{email.subject}}</div>

            <div><span>Sent:</span> {{email.sentAt}}</div>
            
        </li>
    `,
    created() {
        console.log(this.email);
    }
}