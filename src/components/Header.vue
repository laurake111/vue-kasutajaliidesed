<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light justify-content-center-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/">
            <a class="navbar-brand" href="index.html" >
                <img src="../assets/sockicon.png" width="60" height="60" class="d-inline-block " alt="">
                Sock Walk
            </a>
        </router-link>

        <div class="flex-column w-100-lg " style="max-width: 1000px;">
            <!--top row -->
            <div class="navbar-nav d-flex flex-row-reverse"  >
                <ul class="navbar-nav">
                        <li>
                            <h3><a href="#"><p class="fas fa-user-circle"></p></a></h3>
                        </li>
                    <a class="nav-link d-none d-lg-block" href="#">Logi sisse</a>
                </ul>
                <ul class="navbar-nav" id="ostukorv">
                    <li>
                        <router-link to="/ShoppingCart">
                            <h3><a href="ostukorv.html"><p class="fas fa-shopping-cart"></p></a></h3>
                        </router-link>

                    </li>
                    <router-link to="/ShoppingCart">
                        <a class="nav-link d-none d-lg-block" href="">Ostukorv({{ shoppingCart.length }})</a>
                    </router-link>

                </ul>
                <ul class="navbar-nav d-none d-lg-block" id="search">
                    <li>
                        <form class="input-group mb-3 " >
                            <input class="form-control form-control-sm" type="search" placeholder="Search" >
                            <div class="input-group-append">
                                <button class="btn btn-outline-success btn-sm my-2 my-sm-0 fas fa-search" type="submit"></button>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
            <!-- bottom row-->
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav justify-content-center" >
                    <li class="nav-item" id="bottom-row-nav-li">
                        <router-link to="/MenCategory">
                            <a class="nav-link" href="#" id="bottom-row-nav-a">Mehed</a>
                        </router-link>
                    </li>
                    <li class="nav-item" id="bottom-row-nav-li">
                        <a class="nav-link" href="#" id="bottom-row-nav-a">Naised</a>
                    </li>
                    <li class="nav-item" id="bottom-row-nav-li">
                        <a class="nav-link" href="#" id="bottom-row-nav-a">Lapsed</a>
                    </li>
                    <li class="nav-item" id="bottom-row-nav-li">
                        <a class="nav-link" href="#" id="bottom-row-nav-a">Kollektsioonid</a>
                    </li>
                    <li class="nav-item" id="bottom-row-nav-li">
                        <a class="nav-link" href="#" id="bottom-row-nav-a">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                shoppingCart: this.$shoppingCart
            }
        }
    }
</script>

<style scoped>

</style>