<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="heading">Visioon</div>
                    <ul class="footer-menu">
                        <li class="menu-item">
                            <nuxt-link to="/fonctionnalites">Fonctionnalités</nuxt-link>
                        </li>
<!-- {#                        <li class="menu-item"><nuxt-link to="login">myAntler</nuxt-link></li>#}
{#                        <li class="menu-item"><nuxt-link to="knowledgebase-list">Knowledge Base</nuxt-link></li>#}
{#                        <li class="menu-item"><nuxt-link to="faq">FAQ</nuxt-link></li>#} -->
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="heading">Entreprise</div>
                    <ul class="footer-menu">
                        <li class="menu-item">
                            <nuxt-link to="/a-propos">A propos</nuxt-link>
                        </li>
                        <li class="menu-item">
                            <nuxt-link to="/contact">Nous contacter</nuxt-link>
                        </li>
                        <li class="menu-item">
                            <nuxt-link to="/privacy-policy">Protection des données</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
<!-- {#                    <div class="heading">Hosting</div>#}
{#                    <ul class="footer-menu">#}
{#                        <li class="menu-item"><nuxt-link to="hosting">Shared Hosting</nuxt-link></li>#}
{#                        <li class="menu-item"><nuxt-link to="dedicated">Dedicated Server</nuxt-link></li>#}
{#                        <li class="menu-item"><nuxt-link to="vps">Cloud Virtual (VPS)</nuxt-link></li>#}
{#                        <li class="menu-item"><nuxt-link to="domains">Domain Names</nuxt-link></li>#}
{#                    </ul>#} -->
                </div>
                <div class="col-sm-6 col-md-3">
                    <nuxt-link to="/"><img class="svg logo-footer" src="../assets/img/logo-white.svg"
                            alt="logo"></nuxt-link>
                    <div class="copyrigh">&copy;2018-2020 - Tous droits réservés</div>
                    <div class="soc-icons">
                        <a target="_blank" href="https://facebook.com"><img src="../assets/icons/facebook.svg" alt="Social"></a>
                        <a target="_blank" href="https://twitter.com"><img src="../assets/icons/twitter.svg" alt="Social"></a>
                        <a target="_blank" href="https://linkedin.com"><img src="../assets/icons/linkedin.svg" alt="Social"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <ul class="footer-menu">
                        <li id="drop-lng" class="btn-group btn-group-toggle" data-toggle="buttons">
<!-- {#                            <label data-lng="en-US" class="btn btn-secondary">#}
{#                                <nuxt-link to="{{ url('corporate_home', {"_locale": "en"}) }}">EN</nuxt-link>#}
{#                            </label>#}
{#                            <label data-lng="es-ES" class="btn btn-secondary">#}
{#                                <nuxt-link to="{{ url('corporate_home', {"_locale": "es"}) }}">ES</nuxt-link>#}
{#                            </label>#}
{#                            <label data-lng="fr-FR" class="btn btn-secondary">#}
{#                                <nuxt-link to="{{ url('corporate_home', {"_locale": "fr"}) }}">FR</nuxt-link>#}
{#                            </label>#} -->
                        </li>
                        <li class="menu-item by c-grey ml-0">
                            &copy; tous droits réservés -
                            2018-2020 - Creatyx
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">

                </div>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    computed: {
        appName() {
            return process.env.APP_NAME ?? "Visioon";
        },
        github() {
            return process.env.APP_GITHUB ?? 'https://github.com/creatyx';
        },
        twitter() {
            return process.env.APP_TWITTER;
        },
        year() {
            return (new Date()).getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
.soc-icons {
    a {
        color: #ee5586;
        fill: #ee5586;

        img {
            background-color: #fff;
            display: block;
            height: 42px;
            fill: #ee5586;
            line-height: 42px;
            text-align: center;
            border-radius: 15px;
            padding: 10px;
            width: 42px;
            transition: .3s;
            box-shadow: 0 2px 8px 0 rgba(62,62,79,.15);
        }
    }
}

svg {
    height: 40px;
} 
</style>
