<script>
    import {Pie} from 'vue-chartjs';

    export default {
        name: "myPie",
        extends: Pie,
        props: ['chartdata'],
        data: () => ({
            datacollection: {

            }
        }),
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
        mounted() {
            fetch(this.chartdata).then(resp => {
                return resp.json()
            }).then( json => {
                this.datacollection = json;
                this.renderChart(this.datacollection, this.options)
            });
        }
    }

</script>
