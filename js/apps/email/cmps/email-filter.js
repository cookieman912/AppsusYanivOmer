export default {
    template: `
    <section class="email-filter">
        <input v-model="filterBy.email" type="text" @input="filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            filterBy: {
                email: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};