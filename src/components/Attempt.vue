<template>
    <div class="attempt">
        <div class="attempt__info">
            <div class="attempt__user" v-if="withUser">
                {{ attempt.user.name }}
            </div>
            <div class="attempt__date">{{ attempt.date }}</div>
        </div>
        <div class="attempt__type" :class="'attempt__type--' + attempt.type.name">
            {{ attempt.type.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Attempt",

        props: {
            attempt: {},
            withUser: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>