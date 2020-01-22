<template>
    <div class="routes">
        <div class="routes__group">
            <!--<div class="routes__group__title">-->
                <!--{{ __('Стена 1') }}-->
            <!--</div>-->
            <div class="routes__group__routes">
                <route v-for="(route, $i) in routes" :key="$i" :route="route"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Route from "~components/Route"
    import {mapGetters} from 'vuex'

    export default {
        name: 'routes',
        components: {Route},

        async created() {
            await this.$store.dispatch('route/get')
        },

        computed: {
            ...mapGetters({
                routes: 'route/routes'
            })
        }
    }
</script>
