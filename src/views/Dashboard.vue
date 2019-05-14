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
                <my-bar :chartdata="bardata"></my-bar>
            </div>
        </div><br>
        <div class="row">
            <div class="col">
                <h2>Most popular sock materials</h2>
                <my-pie :chartdata="piedata"></my-pie>
            </div>
            <div class="col">
                <h2>Popularity in the world</h2>
                <my-horizontal-bar :chartdata="horizontalBardata"></my-horizontal-bar>
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
                linedata: "line.json",
                horizontalBardata: "horizontal.json",
                piedata: "pie.json",
                bardata: "bar.json"
            }
        }
    }
</script>

<style scoped>

</style>