    import appHeader from "./pages/app-header.js";
    import { router } from "./services/router.js"
    import userMsg from "./cmps/user-msg.js";

    const options = {
        el: '#app',
        router: router,
        template: `
            <div>
                <user-msg/>
                <app-header/>
                <router-view/> 
            </div>           
        `,
        components: {
            appHeader,
            router,
            userMsg
        }
    };
    const app = new Vue(options);