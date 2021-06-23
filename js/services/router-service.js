import homePage from "../pages/homepage.js";
import emailApp from "../apps/email/pages/mail-app.js"
import keepApp from "../apps/keep/pages/keep-app.js";



const routes = [{
        path: '/',
        component: homePage

    },
    //Email section
    {
        path: '/mail',
        component: emailApp
    },


    //Keep section
    {
        path: '/keep',
        component: keepApp
    }

];

export const router = new VueRouter({ routes });