import Chart from 'chart.js/auto'
import {doughnutData} from './data.js'
import {radarData} from './data.js'
import {barData} from './data.js'

const doughnutDataParsed = JSON.parse(doughnutData);
const radarDataParsed = JSON.parse(radarData);
const barDataParsed = JSON.parse(barData);

(async function() {
  const data = doughnutDataParsed;

  new Chart(
    document.getElementById('doughnut'),
    {
      type: 'doughnut',
  data: data
    }
  );
})();

(async function() {
  const data = radarDataParsed;

  new Chart(
    document.getElementById('radar'),
    {
      type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
    }
  );
})();

(async function() {
const data = barDataParsed;

  new Chart(
    document.getElementById('bar'),
    {
      type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
    }
  );
})();


