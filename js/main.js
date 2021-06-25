    import appHeader from "./pages/app-header.js";
    import { router } from "./services/router.js"
    import userMsg from "./cmps/user-msg.js";
    import appFooter from "./pages/app-footer.js";

    const options = {
        el: '#app',
        router: router,
        template: `
            <div class="content-wrap">
                <user-msg/>
                <app-header/>
                <router-view/> 
                <app-footer/>
            </div>           
        `,
        components: {
            appHeader,
            router,
            userMsg,
            appFooter
        }
    };
    const app = new Vue(options);