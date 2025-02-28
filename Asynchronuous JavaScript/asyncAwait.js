function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({user:"Yash", id:231});
        }, 3000);
    })
}

async function getUserData() {
    try{
        console.log("Fetching user data...");
        const data = await fetchData();
        console.log(data);
        console.log("Data fetched successfully !!!");
    }
    catch(err){
        console.log("Error fetching data", err);
    }
}

getUserData();