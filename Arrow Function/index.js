function add(...nums){
    // let total = nums.reduce(function(x,y){
    //     return x + y;
    // }); //W/O ARROW FN

    let total = nums.reduce((x,y) => x + y); //W/ ARROW FN

    console.log(total);
}

add(1,2,3,4,5);