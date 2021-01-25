function addressMaker(country, city){
    // const newAddress = {newCity: city, newCountry: country}; //OLD
    const newAddress = {city, country}; //NEW

    return newAddress;
}

let a = addressMaker('Philippines', 'Batangas');

document.getElementById('name').innerText = a.country;