const personalInfo = {
    fname: 'Marion',
    lname: 'Balba',
    age: '24',
    city: 'Tanauan'
};

// const {fname, lname} = personalInfo; //Long version
const {fname: fn, lname: ln} = personalInfo; //reassigned

document.getElementById('name').innerText = `${fn} ${ln}`;