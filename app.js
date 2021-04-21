
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountryName(data))

const displayCountryName = country => {
    const countriesContainer = document.getElementById('countries-container');
    country.forEach(countryInfo => {
        const countryContainer = document.createElement('div');
        countryContainer.id = 'country-area';


        const CountryDetails = `
            <img onclick = "showDetails('${countryInfo.name}')" src=${countryInfo.flag}> </br>
            <h2 id='countryName'>${countryInfo.name}</h2>
            <h4>${countryInfo.capital}</h4>
            `
        countryContainer.innerHTML = CountryDetails;

        countriesContainer.appendChild(countryContainer);
    });
}
const showDetails = name => {
    document.getElementById('countries-container').style.display = 'none';
    document.getElementById('country-details').style.display = 'block';
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
            showCountryDetails(data[0]);
        })

}

const showCountryDetails = country => {
    console.log(country.name)
    const singleCountryContainer = document.getElementById('country-details');
    const singleCountryDetailsDev = document.createElement('singleCountryDetailsDev');
    const details = `
            <img width="250px" src="${country.flag}">
            <h1> ${country.name}</h1>
            <h2>Region: ${country.region} </h2>
            <h2>Capital: ${country.capital}</h2>
            <h2>CallingCode: [${country.callingCodes}++]</h2>
            <h2>Area: ${country.area} km<sup>2</sup></h2>
            <h2>Population: ${country.population}</h2>
        `
    singleCountryDetailsDev.innerHTML = details;
    singleCountryContainer.appendChild(singleCountryDetailsDev);
}

