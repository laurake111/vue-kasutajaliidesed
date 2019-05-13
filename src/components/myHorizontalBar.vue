<script>
    import { HorizontalBar } from 'vue-chartjs'

    export default {
        extends: HorizontalBar,
        name: "MyHorizontalBar",
        data: () => ({
            datacollection: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#AAAAA", "#2ECC40", "#FFDC00", "#7FDBFF", "#F012BE"],
                        data: [10, 100,1000,200,800]
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
