var dataPointsCtx = document.getElementById("data-points-chart");

var dataPointsChart = new Chart(dataPointsCtx,{
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30]
        }],    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }
});

var cntributorsCtx = document.getElementById("contributors-chart");

var contributorsChart = new Chart(cntributorsCtx,{
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30, 50]
        }],    
        labels: [
            'Red',
            'Yellow',
            'Blue',
            'Green'
        ]
    }
});