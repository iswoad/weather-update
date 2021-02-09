const getCityWeather = () =>{
    let cityName = document.getElementById('city-search').value;
    console.log(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=313674b36b8fa24f194dcf261c032c57&units=metric`)
    .then(res => res.json())
    .then(data => {
        showResult(data)
    })
}
const showResult =(update) =>{
    const showCityName = update.name;
    const showTemp = update.main.temp.toFixed(0);
    const showCondition = update.weather[0].main
    const showIcon = `<img src="https://openweathermap.org/img/wn/${update.weather[0].icon}.png" alt="">`
    document.getElementById('temp-icon').innerHTML = showIcon;
    document.getElementById('city-name').innerText = showCityName;
    document.getElementById('temp-display').innerText = showTemp;
    document.getElementById('condition').innerText = showCondition;

}