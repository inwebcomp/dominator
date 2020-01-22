<template>
    <div class="route-info" v-if="route">
        <route :route="route"/>

        <div class="route-actions">
            <div class="route-action route-action--flash">
                <button class="route-action__button" @click="changeCount('flash', -1)">-</button>
                <div class="route-action__title">
                    {{ __('Флеш') }}
                    <sup class="route-action__count" v-if="flashCount > 0">{{ flashCount }}</sup>
                </div>
                <button class="route-action__button" @click="changeCount('flash', +1)">+</button>
            </div>

            <div class="route-action route-action--top">
                <button class="route-action__button" @click="changeCount('top', -1)">-</button>
                <div class="route-action__title">
                    {{ __('Топ') }}
                    <sup class="route-action__count" v-if="topCount > 0">{{ topCount }}</sup>
                </div>
                <button class="route-action__button" @click="changeCount('top', +1)">+</button>
            </div>

            <div class="route-action route-action--try">
                <button class="route-action__button" @click="changeCount('try', -1)">-</button>
                <div class="route-action__title">
                    {{ __('Попытка') }}
                    <sup class="route-action__count" v-if="tryCount > 0">{{ tryCount }}</sup>
                </div>
                <button class="route-action__button" @click="changeCount('try', +1)">+</button>
            </div>
        </div>

        <div class="separator">
            {{ __('Последние попытки') }}
        </div>
        <attempts :attempts="route.attempts"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Route from "~components/Route"
    import Attempts from "~components/Attempts"

    export default {
        name: 'route-info',
        components: {Attempts, Route},

        data() {
            return {
                flashCount: 0,
                topCount: 0,
                tryCount: 0,
            }
        },

        async created() {
            this.fetch()
        },

        computed: {
            ...mapGetters({
                route: 'route/route'
            })
        },

        methods: {
            async fetch() {
                await this.$store.dispatch('route/info', this.$route.params.route)
            },

            async changeCount(type, amount) {
                if (amount > 0) {
                    await this.$store.dispatch('route/addAttempt', {
                        route: this.route.id,
                        type,
                    })
                } else if (this[type + 'Count'] > 0 && amount < 0) {
                    await this.$store.dispatch('route/removeLastAttempt', type)
                }

                this[type + 'Count'] += amount
                if (this[type + 'Count'] < 0)
                    this[type + 'Count'] = 0

                await this.fetch()
            }
        }
    }
</script>
