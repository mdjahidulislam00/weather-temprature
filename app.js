fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountryName(data))

const displayCountryName = country =>{
    const countriesContainer = document.getElementById('countries-container');
    country.forEach (countryInfo =>{
        const countryContainer = document.createElement('div');
         countryContainer.id = 'country-area';
         

        const CountryDetails = `
            <img id='country-flag' src=${countryInfo.flag} </br>
            <h2>${countryInfo.name}</h2>
            <h4>${countryInfo.capital}</h4>
            `
        countryContainer.innerHTML = CountryDetails;

        countriesContainer.appendChild(countryContainer);
    });
    // for (let i = 0; i < country.length; i++) {
    //     const countryInfo = country[i];
        //  const countryContainer = document.createElement('div');
        //  countryContainer.id = 'country-area';
         

        // const CountryDetails = `
        //     <img id='country-flag' src=${countryInfo.flag} </br>
        //     <h2>${countryInfo.name}</h2>
        //     <h4>${countryInfo.capital}</h4>
        //     `
        // countryContainer.innerHTML = CountryDetails;

        // countriesContainer.appendChild(countryContainer);
    // }


}


