<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        name: "MyBar",
        props: ['chartdata'],
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

<style scoped>

</style>