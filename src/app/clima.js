export class Weather {
    constructor(city, countryCode){
        this.apikey = '1fca2a2cb5991267ae82ff2deec9182c';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI =  `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}lat=35&lon=139&appid=${this.apikey}&units=metric`;
        await fetch(URI);
        const response = await fetch(URI);
        const date = await response.json();
        return date;
    }


    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}