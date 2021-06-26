import { eventBus } from '../services/event-bus-serivce.js'

export default {
    template: `
        <div v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
        </div>
    `,
    data() {
        return {
            msg: null
        };
    },
    created() {

        eventBus.$on('show-msg', this.showMsg);
    },
    destroyed() {
        eventBus.$off('show-msg', this.showMsg);
    },
    methods: {
        showMsg(msg) {
            console.log('in message', msg)
            this.msg = msg;
            console.log(this.msg)
            setTimeout(() => {
                this.msg = null;
            }, 1500);
        }
    }
};