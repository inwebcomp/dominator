<template>
    <div id="app">
        <navigation/>

        <div id="content">
            <router-view/>
        </div>

        <app-footer/>
    </div>
</template>

<style>
    /*@import url("./assets/css/tailwind.css");*/
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css");
</style>

<style lang="scss">
    @import "./assets/scss/app.scss";
</style>

<script>
    import Navigation from "~blocks/Navigation"
    import AppFooter from "~blocks/AppFooter"

    export default {
        components: {AppFooter, Navigation}
    }
</script>