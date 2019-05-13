<template>
    <div class="container">
        <div class="caption text-center">
            <h1>Dashboard</h1>
        </div>
        <br>

        <div class="row">
            <div class="col">
                <h2>Products Sold</h2>
                <myLine :chartdata="linedata"></myLine>
            </div>
            <div class="col">
                <h2>Visitors on page</h2>
                <my-bar></my-bar>
            </div>
        </div><br>
        <div class="row">
            <div class="col">
                <h2>Most popular sock materials</h2>
                <my-pie></my-pie>
            </div>
            <div class="col">
                <h2>Popularity in the world</h2>
                <my-horizontal-bar></my-horizontal-bar>
            </div>
        </div>





    </div>
</template>

<script>
    import myLine from '../components/myLine.vue'
    import myBar from '../components/myBar.vue'
    import myPie from '../components/myPie.vue'
    import myHorizontalBar from '../components/myHorizontalBar.vue'

    export default {
        name: "Dashboard",
        components: {
            myLine,
            myBar,
            myPie,
            myHorizontalBar
        },
        data: function () {
            return {
                linedata: {
                    "labels": ["Jaanuar", "Veebruar", "Märts", "April", "Mai", "Juuni", "Juuli","August","September", "Oktoober", "November", "Detsember"],
                    "datasets": [{
                        "label": "Profit", "data": [600, 550, 740, 400, 350, 400, 550, 700, 600, 700, 900, 1000]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>