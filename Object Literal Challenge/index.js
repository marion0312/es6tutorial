function addressMaker(address){
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'Philippines'
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country} `);
}

addressMaker({city: 'Batangas', state: 'Tanauan'});