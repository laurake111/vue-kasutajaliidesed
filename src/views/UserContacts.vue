<template>
    <div class="container">
        <br>
        <div class="caption text-center">
            <h1>Sisestage kontaktandmed</h1>
        </div><br>
        <form class="row">
            <div class="col-lg">
                <div class="form-group">
                    <label for="exampleInputEmail1">Ees- ja perekonnanimi:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="nimi">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">E-mail:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="e-mail">
                </div>
            </div>
            <div class="col-lg">
                <div class="form-group">
                    <label for="exampleInputEmail1">Aadress:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="aadress">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Telefon:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="telefoni number">
                </div>
            </div>
        </form>
        <div class="row d-flex justify-content-center">
            <router-link to="/ShoppingCart">
                <a href="ostukorv.html" class="btn btn-success my-2 my-sm-0" role="button" style="margin: 5px">Tagasi</a>
            </router-link>
            <router-link to="/Payment">
                <a href="pangavalimine.html" class="btn btn-success my-2 my-sm-0" role="button">Edasi</a>
            </router-link>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "UserContacts"
    }
</script>

<style scoped>

</style>