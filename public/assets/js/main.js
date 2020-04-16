

const watherImg   = document.getElementById('wather-img')
const city        = document.getElementById('city')
const country     = document.getElementById('country')
const main        = document.getElementById('main')
const discription = document.getElementById('discription')
const temp        = document.getElementById('temp')
const pressure    = document.getElementById('pressure')
const humidity    = document.getElementById('humidity')
const cityInput   = document.getElementById('city-input')


const API_KEY  = `84fb049301f3417541b5d4b6936be34f`
const BASE_URL =  `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}`
const ICON_URL = `http://openweathermap.org/img/w/`
const DEFAULT_CITY = 'Khulna, bd'

window.onload = function () {
    navigator.geolocation.getCurrentPosition(s => {
        getWatherData(null, s.coords)

    }, e => {
        getWatherData()
    }) 


    cityInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter'){

            if(e.target.value) {
                getWatherData(e.target.value)
                e.target.value = ''
            }else{
                alert('Please Enter a valid City Name')
            }
        }
    })

}

function getWatherData(city = DEFAULT_CITY, coords) {
    let url = BASE_URL

    city === null ?
        url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` :
        url = `${url}&q=${city}`

    axios.get(url)

        .then(({data}) => {
            let weather = {
                icon: data.weather[0].icon,
                discription: data.weather[0].description,
                main:data.weather[0].main,
                name: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure:data.main.pressure,
                humidity:data.main.humidity,
            }
            setWeather(weather)
        })

        .catch(e => {
            console.log(e)
        })
}

function setWeather(weather) {
    watherImg.src = `${ICON_URL}${weather.icon}.png`
    city.innerHTML = weather.name
    country.innerHTML = weather.country
    main.innerHTML = weather.main
    discription.innerHTML = weather.discription
    temp.innerHTML = weather.temp
    pressure.innerHTML = weather.pressure
    humidity.innerHTML =  weather.humidity
} 