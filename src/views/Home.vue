<template>
   <div>
       <div class="container">
           <div class="jumbotron">
               <div class="caption text-center" id="banner">
                   <h1>Vaata meie uut kevad kollektsiooni</h1>
                   <p><a class="btn btn-outline-success my-2 my-sm-0" href="mehed.html" role="button">Vaata tooteid</a></p>
               </div>
           </div>
       </div>
       <div class="container">
           <div class="caption text-center">
               <h1>Populaarsed tooted:</h1>
           </div>
           <div class="row">
               <Product v-for="p in $options.products" v-bind="p"></Product>
           </div>
           <hr>
           <div class="container bg-light">
               <div class="row">
                   <div class="col">
                       <h3>Brändist</h3>
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, lorem eget pretium luctus, dui lectus iaculis lacus, et lobortis mi eros sed est. Nam aliquam nunc id purus euismod ullamcorper. Maecenas ornare, nibh et ultrices finibus, nulla odio viverra justo, eget euismod mi diam ac nisl. Integer nec volutpat mauris. Curabitur egestas feugiat justo, et iaculis elit scelerisque at. Proin et turpis ut purus scelerisque sodales. Mauris erat ligula, facilisis vitae felis sit amet, volutpat ullamcorper purus. Sed auctor consequat tempor. Vivamus est nisi, mattis sed tempor at, pellentesque ut neque.
                           Mauris vestibulum vitae magna id luctus. Pellentesque sit amet sapien aliquet augue auctor pretium eget at sapien.
                       </p>
                   </div>

                   <img src="../assets/products.jpg"  width="300" height="350" class="rounded mx-auto d-block ">
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import Product from '../components/Product.vue'
    import json from "../sock.json"

    export default {
        name: "Home",
        products: json,
        components: {
            Product
        },

    }
</script>

<style scoped>

</style>