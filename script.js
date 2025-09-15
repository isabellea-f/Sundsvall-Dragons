const weatherCont = document.querySelector(".weather-cont");

async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=62.39129&lon=17.3063&appid=b2024be8c564ed764512c35c213e201c&lang=sv&units=metric"
  );
  const data = await res.json();
  const weatherDesc = data.weather[0].description;
  const desc = document.createElement("p");
  weatherDesc.append(desc);

  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  const img = document.createElement("img");
  img.src = iconUrl;

  weatherCont.append(desc, img);
}

getWeather();
