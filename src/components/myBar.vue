<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        name: "MyBar",
        data: () => ({
            datacollection: {
                labels: ["Jaanuar", "Veebruar", "Märts", "April", "Mai", "Juuni", "Juuli","August","September", "Oktoober", "November", "Detsember"],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [900, 850, 740, 800, 950, 800, 750, 800, 900, 1000, 1100, 1270]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }),

        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>

<style scoped>

</style>