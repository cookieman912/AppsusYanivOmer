export default {
    props: ['emails'],

    template: `
    <div class="email-status">({{unreadMsgs}})</div>
    `,

    data() {
        return {
            unreadMsgs: null
        }
    },

    watch: {
        emails: {
            handler() {
                const unreadEmails = this.emails.filter(email => {
                    return !email.isRead
                })
                this.unreadMsgs = unreadEmails.length
            }
        }
    }
}