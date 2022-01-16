<template>
    <div class="container">
        <p class="h4">{{document.name}}</p>
        <div class="container-fluid">
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            document: {
                type: Object,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>