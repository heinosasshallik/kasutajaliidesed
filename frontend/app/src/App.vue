<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./components/layout/Header";

    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style lang="scss" scoped>
    html, body {
        margin: 0;
    }
</style>
