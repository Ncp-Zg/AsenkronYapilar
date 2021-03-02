// console.log(this);


// set Timeout

// setTimeout(function(){
//     console.log("Naber");
// },2000);


// Set Interval
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
},1000)
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});

// Clear Interval
