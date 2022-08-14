export class Store {

    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Argentina';
        this.defaultCountry = 'AR';
    }

    getLocationDate() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        }
            else {
                this.city = localStorage.getItem('city');
            }
            if (localStorage.getItem('countryCode') === null) {
                this.countryCode = this.defaultCity;
            }
                else {
                    this.countryCode = localStorage.getItem('countryCode');
                }

            return {
                city: this.city,
                countryCode: this.countryCode
            }
    }

    setLocationDate(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

}