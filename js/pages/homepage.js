export default {
    template: `<div class="homepage">
         <h1> Appsus </h1>
         <h2>Manage your life easily</h2>
         <div class="card-container">
             <div class="card">
                 <h3>Mail</h3>
                 <p>Stay connected with everything and everyone around with our great E-mail service, allowing to keep up with your friends and family.  </p>
                <router-link :to="'/mail/main'"><img src="img/mail.jpg"></router-link>
             </div>
             <div class="card">
                 <h3>Keep</h3>
                 <p>Never forget anything with our great keep service. save notes, pics, videos and lists so you'll always know what's going on.</p>
                <router-link :to="'/keep'"><img src="/img/keep.jpg"></router-link>
             </div>
         </div>  
            </div>           
        `,

}