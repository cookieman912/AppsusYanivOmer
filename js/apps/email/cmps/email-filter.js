export default {
    template: `
    <section class="car-filter">
        <input v-model="filterBy.mail" type="text" @input="filter" placeholder="Search mail">
    </section>
    `,
    data() {
        return {
            filterBy: {
                mail: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};