<template>
    <div class="bg-light">
        <div class="caption text-center">
            <h5>Sorteeri</h5>
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Odavam enne
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Odavam enne</a>
                    <a class="dropdown-item" href="#">Kallim enne</a>
                    <a class="dropdown-item" href="#">Nimi (A > Z)</a>
                    <a class="dropdown-item" href="#">Nimi (A < Z)</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="caption text-center">
            <h5>Suurus</h5>
            <div class="form-check">
                <input type="radio" class="form-check-input">
                <label class="form-check-label" >33-36</label><br>
                <input type="radio" class="form-check-input">
                <label class="form-check-label" >37-40</label><br>
                <input type="radio" class="form-check-input">
                <label class="form-check-label" >41-44</label><br>
                <input type="radio" class="form-check-input">
                <label class="form-check-label" >45-48</label><br>
            </div>
        </div>
        <hr>
        <div class="caption text-center">
            <h5>Hind</h5>
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    0€- 5€
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">0€-5€</a>
                    <a class="dropdown-item" href="#">6€-20€</a>
                    <a class="dropdown-item" href="#">21€-30€</a>
                    <a class="dropdown-item" href="#">30€ - ..</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sort"
    }
</script>

<style scoped>

</style>