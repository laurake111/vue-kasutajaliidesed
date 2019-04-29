<template>
    <div>
        <br>
        <div class="row">
            <div class="col-3">
                <sort></sort>
            </div>
            <div class="col-9">
                <div class="row">

                    <Product v-for="(p, key) in $socks " v-bind="p" v-bind:index="key"></Product>

                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import Sort from '../components/Sort.vue'
    import Product from '../components/Product.vue'



    export default {
        name: "MenCategory",
        components: {
            Sort, Product
        }

    }
</script>

<style scoped>

</style>