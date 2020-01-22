<template>
    <router-link :to="{name: 'route', params: {route: route.id}}" class="route">
        <div class="route__grade" :style="{backgroundColor: route.color}">
            <div v-if="route.grade">{{ route.grade.title }}</div>
            <div v-if="!route.grade">?</div>
        </div>
        <div class="route__info">
            <div class="route__title">{{ route.title }}</div>
            <div class="route__author" v-if="route.author">{{ route.author.name }}</div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "Route",

        props: ['route']
    }
</script>