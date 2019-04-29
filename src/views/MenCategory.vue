<template>
    <div>
        <br>
        <div class="row">
            <div class="col-3">
                <sort></sort>
            </div>
            <div class="col-9">
                <div class="row">

                    <Product v-for="p in $options.products" v-bind="p"></Product>

                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import Sort from '../components/Sort.vue'
    import Product from '../components/Product.vue'
    import json from "../sock.json"


    export default {
        name: "MenCategory",
        products: json,
        components: {
            Sort, Product
        }

    }
</script>

<style scoped>

</style>