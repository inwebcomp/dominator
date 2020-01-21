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
</style>

<style lang="scss">
    @import "./assets/scss/app.scss";
</style>

<script>
    import Navigation from "~components/Navigation"
    import AppFooter from "~components/AppFooter"

    export default {
        components: {AppFooter, Navigation}
    }
</script>