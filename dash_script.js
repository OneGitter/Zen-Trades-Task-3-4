// Sample data for charts
const jobLocationData = {
    labels: ['Hyderabad', 'Mumbai', 'Delhi', 'Pune'],
    datasets: [{
        label: 'Revenue',
        data: [5000, 3000, 6000, 4000],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        borderWidth: 1
    }]
};

const jobTypeData = {
    labels: ['Marketing', 'Sales', 'Production', 'Software'],
    datasets: [{
        label: 'Revenue',
        data: [7000, 2000, 4000, 3000],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        borderWidth: 1
    }]
};

// Render charts
const ctx1 = document.getElementById('jobLocationChart').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: jobLocationData,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    drawBorder: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

const ctx2 = document.getElementById('jobTypeChart').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: jobTypeData,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    drawBorder: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});