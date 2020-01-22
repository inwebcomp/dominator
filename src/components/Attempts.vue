<template>
    <div class="attempts">
        <attempt :withUser="withUser" v-for="(attempt, $i) in attempts" :key="$i" :attempt="attempt"/>
    </div>
</template>

<script>
    import Attempt from "~components/Attempt"

    export default {
        name: "Attempts",

        components: {Attempt},

        props: {
            attempts: {},
            withUser: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>