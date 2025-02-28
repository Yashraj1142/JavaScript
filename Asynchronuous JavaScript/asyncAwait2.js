function getPostData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({postID : "p231"});
        }, 2000);
    })
}

function getPostComment(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Looking nice.");
        }, 3000);
    })
}

async function showData() {
    try{
        console.log("Fetching data...");
        // let postData = await getPostData();
        // let comment = await getPostComment();
        
        let [postData, comment] = await Promise.all([getPostData(), getPostComment()]);

        console.log(postData);
        console.log(comment);
        console.log("Data fetched !!!");
    } catch(err){
        console.log("Error found", err);
    }
}

showData();