<template>
    <div class="container">
        <br>
        <div class="caption text-center">
            <h1>Maksmine</h1>
        </div><br>
        <div class="row">
            <div class="col">
                <div class="caption text-center">
                    <h3>Registreeritud kasutajale</h3>
                    <br>
                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Kasutajanimi</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="sisesta kasutajanimi või email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Parool</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="sisesta parool">
                    </div>
                    <button type="submit" class="btn btn-success my-2 my-sm-0">Logi sisse</button>
                </form>
            </div>
            <div class="vl"></div>
            <div class="col ">
                <div class="caption text-center">
                    <h3>Ei soovi registreerida kontot</h3>
                </div>
                <div class="caption text-center">
                    <router-link to="/UserContacts">
                        <a href="" class="btn btn-success my-2 my-sm-0" role="button">Vormista ost</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HowToPay"
    }
</script>

<style scoped>

</style>