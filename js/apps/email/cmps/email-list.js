import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <ul class="email-list">
            <email-preview v-for="email in emails" :key="email.id" :email="email" />
        </ul>
    `,
    components: {
        emailPreview
    }
}