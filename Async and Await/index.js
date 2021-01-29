const apiUrl = "https://official-joke-api.appspot.com/random_joke";

// https://cors-anywhere.herokuapp.com/ //ADD THIS LINE IF API IS RECEIVING CORS ERROR

// LONG VERSION
// function getTop100(){
    // fetch(apiUrl)
    // .then((r) => r.json())
    // .then((json) => {
    //     console.log(json)
    // })
    // .catch((error) => {
    //     console.log("error");
    // });
// };

//SHORT VERSION
async function getTop100(){
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json);
}

getTop100();