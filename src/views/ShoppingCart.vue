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
                    <tr>
                        <th scope="row">X</th>
                        <td>Tri Paloski</td>
                        <td><input type="number" name="quantity" min="1" max="30" value="1"></td>
                        <td>10€</td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <h5>Valige tarneviis</h5>
                    <div class="form-check">
                        <input type="radio" name="shipping" class="form-check-input" id="s1">
                        <label class="form-check-label" for="s1">Tulen esindusse järgi</label><br>
                        <input type="radio" name="shipping" class="form-check-input" checked="checked " id="s2">
                        <label class="form-check-label" for="s2" >Omniva pakiautomaat(+1.99€)</label><br>
                        <input type="radio" name="shipping" class="form-check-input" id="s3">
                        <label class="form-check-label" for="s3">Kuller toob koju (+4.99€)</label><br>
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
                                <td>Vahesumma:</td><td>10€</td>
                            </tr>
                            <tr><td>Tarneviis:</td><td>1.99€</td></tr>
                            <tr><td><strong>Kokku:</strong></td><td><strong>11.99€</strong></td></tr>
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
        name: "shoppingCart"
    }
</script>

<style scoped>

</style>