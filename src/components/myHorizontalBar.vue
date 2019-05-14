<script>
    import { HorizontalBar } from 'vue-chartjs'

    export default {
        extends: HorizontalBar,
        name: "MyHorizontalBar",
        props: {
            chartdata: String
        },
        data: () => ({
            datacollection: {
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }),

        mounted () {
            fetch(this.chartdata).then(resp => {
                return resp.json()
            }).then( json => {
                this.datacollection = json;
                this.renderChart(this.datacollection, this.options)
            });
        }
    }
</script>
