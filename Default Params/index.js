function addArray(numArray = []){
    let total = 0;

    numArray.forEach((element) => {
        total += element;
    });

    console.log(total);
}

addArray();