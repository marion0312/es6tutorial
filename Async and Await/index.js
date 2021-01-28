const apiUrl = "https://official-joke-api.appspot.com/random_joke";

// https://cors-anywhere.herokuapp.com/ //ADD THIS LINE IF API IS RECEIVING CORS ERROR

function getTop100(){
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json)
    })
    .catch((error) => {
        console.log("error");
    })
};

getTop100();