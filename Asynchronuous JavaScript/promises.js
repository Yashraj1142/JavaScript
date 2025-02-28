function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully.");
            } else{
                reject("Error fetching data.");
            }
        }, 4000);
    });
}

// let response = fetchData();
// console.log(response);

let response = fetchData()
    .then((data)=>{     //catching the success
        console.log(data);
    })
    .catch((err)=>{     //catching the error
        console.error(err);
    });

console.log(response);