
// to show the current time on the web page

function updateTime() {
  var currentTimeElement = document.getElementById('current-time');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  currentTimeElement.textContent = timeString;
}

setInterval(updateTime, 1000); 

function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var type = document.getElementById("type").value;

    if (!temperature) {
      alert("Please enter a temperature.");
      return;
    }

    if (isNaN(temperature)) {
      alert("Please enter a valid number for the temperature.");
      return;
    }

    var convertedTemperature;
    var convertedType;

    if (type === "celsius") {
      convertedTemperature = (temperature * 9 / 5) + 32;
      convertedType = "F";
    } else if (type === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5 / 9;
      convertedType = "\u2103";
    } else if (type === "kelvin") {
      convertedTemperature = parseFloat(temperature) + 273.15;
      convertedType = "K";
    }

    document.getElementById("result").innerHTML = convertedTemperature.toFixed(4) + " " + convertedType;
  }