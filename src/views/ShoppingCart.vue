<template>
    <div class="container" style="padding-top: 20px;">
        <h5>Minu Ostukorv</h5>
        <div class="row">
            <div class="col-lg-8">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Kustuta?</th>
                        <th scope="col">Nimi</th>
                        <th scope="col">Kogus</th>
                        <th scope="col">Hind</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(toode, index) in shoppingCart" :key="index">
                        <th scope="row" v-on:click=deleteProduct(index)>X</th>
                        <td>{{ toode.name }}</td>
                        <td><input type="number" name="quantity" min="1" max="30" v-model="toode.kogus"></td>
                        <td>{{ toode.hind }}€</td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <h5>Valige tarneviis</h5>
                    <div class="form-check">
                        <span v-for="(valik, index) in tarneviis" :key="index">
                            <input type="radio" name="shipping" class="form-check-input" :id="'s'+index" :value="index" v-model="valitudTarne">
                            <label class="form-check-label" :for="'s'+index">{{valik.name}} ({{valik.hind}} €)</label><br>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card ">
                    <div class="card-header">
                        <h3>Tellimuse kokkuvõte</h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <td>Vahesumma:</td><td>{{vahesumma}}€</td>
                            </tr>
                            <tr><td>Tarneviis:</td><td> {{tarneviis[valitudTarne].hind}}€</td></tr>
                            <tr><td><strong>Kokku:</strong></td><td><strong>{{kokku}}€</strong></td></tr>
                        </table>
                        <router-link to="/HowToPay">
                            <a href="payment_how.html" class="btn btn-success my-2 my-sm-0"  role="button">Vormista ost</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shoppingCart",
        data: function () {
            return {
                shoppingCart: this.$shoppingCart,
                // shoppingCart: [
                //     {
                //         name: "meeste sokid, Adidas, (33-36)",
                //         kogus: 2,
                //         hind: 7
                //     },
                //     {
                //         name: "meeste sokid, Adidas, (33-36)",
                //         kogus: 2,
                //         hind: 7
                //     },
                //     {
                //         name: "meeste sokid, Adidas, (33-36)",
                //         kogus: 2,
                //         hind: 7
                //     },
                //     {
                //         name: "meeste sokid, Adidas, (33-36)",
                //         kogus: 2,
                //         hind: 7
                //     },
                // ],
                tarneviis: [
                    {
                        name: "tulen ise",
                        hind: 0
                    },
                    {
                        name: "omniva",
                        hind: 1.99
                    },
                    {
                        name: "kuller",
                        hind: 4.99
                    },
                ],
                valitudTarne: 0
            }
        },
        computed: {
            vahesumma: function () {
                    let vahesum = 0;
                    for (let toode of this.shoppingCart){
                        if (toode){
                            vahesum += toode.hind * toode.kogus
                        }
                    }
                    return vahesum;
            },
            kokku: function () {
                let kokku = 0;
                kokku = this.tarneviis[this.valitudTarne].hind + this.vahesumma
                return kokku;
            }
        },
        methods: {
            deleteProduct: function (id) {
                console.log(id);
                this.shoppingCart.splice(id, 1)
            }
        }
    }
</script>

<style scoped>

</style>