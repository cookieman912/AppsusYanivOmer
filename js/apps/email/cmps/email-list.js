import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <ul class="email-list">
            <email-preview v-for="email in emails" :email="email" />
        </ul>
    `,
    created() {
    },

    components: {
        emailPreview
    }
}