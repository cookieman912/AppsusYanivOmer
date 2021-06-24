import homePage from "../pages/homepage.js";
import emailApp from "../apps/email/pages/mail-app.js"
import keepApp from "../apps/keep/pages/keep-app.js";
import noteDetails from "../apps/keep/pages/note-details.js";
import emailDetails from "../apps/email/pages/email-details.js";
import emailCompose from "../apps/email/cmps/email-compose.js";



const routes = [{
        path: '/',
        component: homePage

    },
    //Email section
    {
        path: '/mail',
        component: emailApp
    },
    {
        path: '/mail/compose',
        component: emailCompose
    },
    {
        path: '/mail/:emailId?',
        component: emailDetails
    },


    //Keep section
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/keep/details/:noteId?',
        component: noteDetails
    }

];

export const router = new VueRouter({ routes });