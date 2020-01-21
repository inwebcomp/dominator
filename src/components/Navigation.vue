<template>
    <div class="navigation">
        <div class="navigation__toggler">
            <i class="fas fa-bars"></i>
        </div>
        <div class="navigation__title">
            {{ title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation",

        data() {
            return {
                title: this.__('Маршруты'),
            }
        }
    }
</script>