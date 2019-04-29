<template>
    <div class="container" style="padding-top: 40px;">

        <div class="row">
            <div class="col-lg-4">
                <img src="../../public/adidas.jpg" class="rounded w-100 d-block "
                     alt="...">
                <br>
                <router-link to="/MenCategory">
                    <a href="mehed.html" class="btn btn-outline-success my-2 my-sm-0" role="button" >Tagasi toodete juurde...</a>
                </router-link>
            </div>

            <div class="col-lg-4 d-flex justify-content-between flex-column">
                <div>
                    <h4>Meeste sokid</h4>
                    <h1>"Tri Paloski</h1>
                </div>
                <div>
                    <p>Suurus:</p>
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        33-36
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">42-45</a>
                        <a class="dropdown-item" href="#">39-42</a>
                        <a class="dropdown-item" href="#">36-39</a>
                        <a class="dropdown-item" href="#">33-36</a>
                    </div>
                </div>
                <div>
                    <p>Kogus:</p>
                    <input type="number" name="quantity" min="1" max="30" value="1">
                </div>




                <h3>Hind: 10€</h3>

                <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="say1('lisatud ostukorvi')">Lisa ostukorvi</button></p>

            </div>

            <br>
            <div style="padding-top: 40px; padding-bottom: 40px">
                <h3>Kirjeldus</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, lorem eget pretium luctus, dui lectus iaculis lacus, et lobortis mi eros sed est. Nam aliquam nunc id purus euismod ullamcorper. Maecenas ornare, nibh et ultrices finibus, nulla odio viverra justo, eget euismod mi diam ac nisl. Integer nec volutpat mauris. Curabitur egestas feugiat justo, et iaculis elit scelerisque at. Proin et turpis ut purus scelerisque sodales. Mauris erat ligula, facilisis vitae felis sit amet, volutpat ullamcorper purus. Sed auctor consequat tempor. Vivamus est nisi, mattis sed tempor at, pellentesque ut neque.
                    Mauris vestibulum vitae magna id luctus. Pellentesque sit amet sapien aliquet augue auctor pretium eget at sapien.
                </p>
            </div>
        </div>



    </div>
</template>

<script>
    import json from "../sock.json"
    export default {
        name: "ProductDetailView",
        products: json,
        methods: {
            say1: function (message) {
                alert(message)
            }
        }
    }
</script>

<style scoped>

</style>