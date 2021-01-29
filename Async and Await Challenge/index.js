function resolveAfter3Second(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

// resolveAfter3Second().then((data) => {
//     console.log(data);
// });

async function getData(){
    const response = await resolveAfter3Second();

    console.log(response);
}

getData();