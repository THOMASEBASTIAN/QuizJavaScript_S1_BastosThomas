
fetch('http://api.weatherapi.com/v1/current.json?key=%202160dd8f47b84474a6c121511252804%20&q=Floridablanca')
  .then(response => response.json())
  .then(data => {
    const weather = data.current;
    const location = data.location;
    document.getElementById('location').innerText = `${location.name}, ${location.region}`;
    document.getElementById('temperature').innerText = `${weather.temp_c} °C`;
    document.getElementById('condition').innerText = weather.condition.text;
    document.getElementById('icon').src = weather.condition.icon;
  })