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
      convertedType = "Fahrenheit";
    } else if (type === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5 / 9;
      convertedType = "Celsius";
    } else if (type === "kelvin") {
      convertedTemperature = parseFloat(temperature) + 273.15;
      convertedType = "Kelvin";
    }

    document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedType;
  }