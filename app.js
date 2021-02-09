const getCityWeather = () =>{
    const cityName = document.getElementById('city-search').value;
    console.log(cityName)
    fetch('https://api.openweathermap.org/data')
    .then(res => res.json())
    .then(data => console.log(data))
}