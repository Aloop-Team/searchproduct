/*  Dashboard  */

  const salesBox = document.querySelector('.sales-box p');
  const refundBox = document.querySelector('.refund-box p');
  const netvalueBox = document.querySelector('.netvalue-box p');
  const approvedBox = document.querySelector('.approved-box p');

  const salesData = parseFloat(salesBox.textContent);
  const refundData = parseFloat(refundBox.textContent);
  const netvalueData = parseFloat(netvalueBox.textContent.replace('€ ', '').replace(',', ''));
  const approvedData = parseFloat(approvedBox.textContent.replace(' %', ''));

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sales', 'Refund', 'Net Value', 'Approved'],
      datasets: [{
        label: 'Dashboard Data',
        data: [salesData, refundData, netvalueData, approvedData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
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

