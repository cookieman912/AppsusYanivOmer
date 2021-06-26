import outboxPreview from "./outbox-preview.js"

export default {
    props: ['emails'],
    template: `
        <ul class="outbox-list">
            <outbox-preview v-for="email in emails" :key="email.id" :email="email" />
        </ul>
    `,
    components: {
        outboxPreview
    }
}