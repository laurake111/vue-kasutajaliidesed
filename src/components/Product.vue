<template>
    <div class="col-sm-6 col-md-4">
        <div class="card" >
            <img v-bind:src="image" class="rounded w-100 d-block " alt="...">
            <div class="caption text-center">
                <div>
                    <h3>{{ name }}</h3>
                    <p>{{ description }}</p>
                    <p>
                        <router-link :to="{name:'ProductDetailView', params: {id:index}}">
                            <a href="product_detail.html" class="btn btn-outline-success my-2 my-sm-0" role="button">Vaata toodet</a>
                        </router-link>
                        <button class="btn btn-default" v-on:click="addToShoppingCart()">Lisa ostukorvi</button></p>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Product"
        ,props: {
            index: String,
            name: String,
            description: String,
            hind: Number,
            image: String
        },
        methods: {
            say: function (message) {
                alert(message + this.index)
            },
            addToShoppingCart: function () {
                this.$shoppingCart.push({name: this.name, kogus: 1, hind: this.hind})
            }
        }
    }

</script>

<style scoped>
    img {
        height:300px;
        width:auto;/*maintain aspect ratio*/
        max-width:500px;
    }

</style>