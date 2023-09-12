let city = document.getElementById('city')
let country = document.getElementById('country')
let temperature = document.getElementById('temp')
let user_input = document.getElementById('user_input')


let checkTemp = async() => {
    // alert("hehe its working")
    let cityValue = user_input.value
    if(cityValue == " "){
         alert("please enter city name before search")
    }else{
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
    let data= await response.json()
    city.textContent= data.name
    country.textContent=data.sys.country
    temp.textContent=data.main.temp
    }
}