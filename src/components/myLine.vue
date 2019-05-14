<script>
    import {Line} from 'vue-chartjs'

    export default {
        extends: Line,
        props: ['chartdata'],
        data: function() {
            return {
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
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

<style scoped>

</style>