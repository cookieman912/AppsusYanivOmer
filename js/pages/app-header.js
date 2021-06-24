export default {
    template: `
        <div class="app-header">
            <h1 class="logo">Appsus</h1> 
            <nav class="page-nav"> 
                <router-link to="/" active-class="active-link" exact>Home</router-link> 
                <router-link to="/mail">O-mail</router-link>
                <router-link to="/keep">y-keep</router-link> 
            </nav>
        </div>`
}