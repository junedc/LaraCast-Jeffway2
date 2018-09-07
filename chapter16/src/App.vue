<template>
    <div id="app">

        <message>Hello There</message>

        <message>Hello There 2</message>

        <message>Hello There 3</message>
    </div>
</template>

<script>

    import Message from './components/Message.vue';


    export default {
        name: 'app',
        components: {
            Message
        },
        data() {
            return {}
        }
    }
</script>

<style>


</style>
