<template>
    <div class="container">
        <br>
        <div class="caption text-center">
            <h1>Valige maksemeetod</h1>
        </div><br>
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                   aria-selected="true">Pangalink</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                   aria-selected="false">Krediitkaardiga</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent" >
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style="margin: 9px">
                <div class="form-check">
                    <input type="radio" name="shipping" class="form-check-input" id="s1">
                    <label class="form-check-label" for="s1">Swedbank</label><br>
                    <input type="radio" name="shipping" class="form-check-input" checked="checked " id="s2">
                    <label class="form-check-label" for="s2" >LHV</label><br>
                    <input type="radio" name="shipping" class="form-check-input" id="s3">
                    <label class="form-check-label" for="s3">SEB</label><br>
                    <input type="radio" name="shipping" class="form-check-input" id="s3">
                    <label class="form-check-label" for="s3">Nordea/Luminor</label><br>
                    <input type="radio" name="shipping" class="form-check-input" id="s3">
                    <label class="form-check-label" for="s3">Coop</label><br>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" style="margin: 9px">
                <form class="col-lg">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Kaardi number:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="kaardinumber">
                    </div>
                    <div class="row " style="padding-right: 15px;padding-left: 15px;">
                        <div class="form-group flex-fill" style="margin-right: 5px;">
                            <label for="exampleInputPassword1">Turvanumber(3 numbrit):</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                   placeholder="XXX">
                        </div>
                        <div class="form-group flex-fill">
                            <label for="exampleInputEmail1">Kaart aegub:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="dd/mm/yyyy">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <router-link to="/UserContacts">
                <a href="pangavalimine.html" class="btn btn-success my-2 my-sm-0" role="button" style="margin: 5px">Tagasi</a>
            </router-link>
            <router-link to="/ThankYou">
                <a href="thank.html" class="btn btn-success my-2 my-sm-0" role="button">Maksa</a>
            </router-link>
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