<template>
    <div class="routes">
        <div class="routes__group">
            <div class="routes__group__title">
                {{ __('Стена 1') }}
            </div>
            <div class="routes__group__routes">
                <route/>
                <route/>
                <route/>
            </div>
        </div>
    </div>
</template>

<script>
    import Route from "~components/Route"

    export default {
        name: 'routes',
        components: {Route},
    }
</script>
