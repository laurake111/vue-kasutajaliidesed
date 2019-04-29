<template>
    <div class="container" style="padding-top: 40px;">

        <div class="row">
            <div class="col-lg-4">
                <img v-bind:src="product.image" class="rounded w-100 d-block "
                     alt="...">
                <br>
                <router-link to="/MenCategory">
                    <a href="mehed.html" class="btn btn-outline-success my-2 my-sm-0" role="button" >Tagasi toodete juurde...</a>
                </router-link>
            </div>

            <div class="col-lg-4 d-flex justify-content-between flex-column">
                <div>
                    <h4>Meeste sokid</h4>
                    <h1>{{ product.name }}</h1>
                </div>
                <div>
                    <p>Suurus:</p>
                    <select v-model="suurus">
                        <option value="33-36">33-36</option>
                        <option value="36-39">36-39</option>
                        <option value="39-42">39-42</option>
                        <option value="42-45">42-45</option>
                    </select>

                </div>
                <div>
                    <p>Kogus:</p>
                    <input v-model="kogus" type="number" name="quantity" min="1" max="30" value="1">
                </div>




                <h3>Hind: {{ product.hind }}€</h3>

                <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="addToShoppingCart()">
                    Lisa ostukorvi
                </button>

            </div>

            <br>
            <div style="padding-top: 40px; padding-bottom: 40px; width: 500px;">
                <h3>Kirjeldus</h3>
                <p>
                    {{ product.description }}
                </p>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "ProductDetailView",
        methods: {
            say1: function (message) {
                alert(message)
            },
            addToShoppingCart: function () {
                this.$shoppingCart.push({name: this.product.name, kogus: this.kogus, hind: this.product.hind})
            }
        },
        data: function () {
            return{
                kogus: 1,
                suurus: "33-36",
                product:this.$socks[this.$route.params.id]
            }
        }
    }
</script>

<style scoped>

</style>