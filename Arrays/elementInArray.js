//create an array and cehck whether an element is presnet in it or not

let arr = ["London", "Delhi", "Brisbane", "Chicago", "Montreal", "Dagestan", "Auckland"]

let isLondonInArray = arr.includes("London");

if(isLondonInArray){
    console.log("Yes, it is present.");
} else{
    console.log("No, its not present");
}
