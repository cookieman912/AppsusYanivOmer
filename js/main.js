    import appHeader from "./pages/app-header.js";
    import { router } from "./services/router-service.js"
    const options = {
        el: '#app',
        router: router,
        template: `<div>
        <app-header/>
        <router-view/> 
            </div>           
        `,
        components: {
            appHeader,
            router,
        }
    };
    const app = new Vue(options);