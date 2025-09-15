async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=62.39129&lon=17.3063&appid=b2024be8c564ed764512c35c213e201c&lang=sv&units=metric"
  );
  const data = res.json();
}
