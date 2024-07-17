
  // creating the chart with the name of the products
  
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Table', 'CHair', 'Night Stand'],
      datasets: [{
        label: 'Number of Sales',
        data: [12, 19, 3],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });