export const optionsLineChart: Chart.ChartOptions = {
  maintainAspectRatio: false,
  legend: { display: false },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: 'rgba(238, 238, 238, 0.82)',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};
