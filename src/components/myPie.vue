<script>
    import {Pie} from 'vue-chartjs';

    export default {
        name: "myPie",
        extends: Pie,
        data: () => ({
            datacollection: {
                labels: ["Cotton", "Wool", "Nylon", "Polyester", "Acryllic"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["#F012BE", "#2ECC40", "#FFDC00", "#7FDBFF", "#AAAAAA"],
                    data: [2478, 5267, 734, 784, 433]
                }]
            }
        }),
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
        mounted() {
            this.renderChart(this.datacollection, this.options)
        }
    }

</script>
