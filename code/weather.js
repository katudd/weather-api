
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=9c89caa103cec42abc72f364adb15a13").then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("temp").innerHTML = json.main.temp + "°C"
  document.getElementById("clouds").innerHTML = json.weather[0].description
  document.getElementById("location").innerHTML = "Today's weather in " + json.name
  if (json.main.temp < 5) {
    document.getElementById("backgroundbox").style.background = "#e4779d"
} else {
    document.getElementById("backgroundbox").style.background = "#73c1da"
}
})
