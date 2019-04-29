<template>
    <div class="container">
        <br>
        <div class="caption text-center">
            <img src="../assets/thank_you_glow.png" style="max-width: 100%;">
            <h3>See you again soon! :)</h3>
        </div><br><br><br><br>
        <hr>
        <div class="caption text-center">
            <h4>Similar products for you</h4>
        </div><br>

        <div class="row">
            <Product v-for="p in $options.products" v-bind="p"></Product>
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product.vue'
    import json from "../sock.json"

    export default {
        name: "ThankYou",
        products: json,
        components: {
            Product
        }
    }
</script>

<style scoped>

</style>