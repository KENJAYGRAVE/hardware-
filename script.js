let labels = [];
let tempData = [];
let humData = [];

// TEMPERATURE CHART
const tempCtx = document.getElementById('tempChart').getContext('2d');
const tempChart = new Chart(tempCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: tempData,
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        min: 20,
        max: 40
      }
    }
  }
});

// HUMIDITY CHART
const humCtx = document.getElementById('humChart').getContext('2d');
const humChart = new Chart(humCtx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Humidity (%)',
      data: humData,
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        min: 40,
        max: 90
      }
    }
  }
});

// FUNCTION PARA SA ESP32
function updateSensor(temp, hum) {

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("humidity").innerText = hum + " %";

  let now = new Date().toLocaleTimeString();

  labels.push(now);
  tempData.push(temp);
  humData.push(hum);

  tempChart.update();
  humChart.update();

  // TABLE
  let table = document.getElementById("logTable");
  let row = `<tr>
      <td>${now}</td>
      <td>${temp}</td>
      <td>${hum}</td>
    </tr>`;
    
  table.innerHTML = row + table.innerHTML;
}

/* 
TEST DATA (para makita ang graph lines)
Pwede nimo tangtangon kung ESP32 na gamit
*/
updateSensor(30, 60);
updateSensor(32, 65);
updateSensor(31, 63);
