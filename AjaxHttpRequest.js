// Ajax,callback , http requests

// class Request {

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     //Get Request

//     get(url){

//         this.xhr.open("GET",url); // Bağlantı açık
        
//         this.xhr.onload = function(){

//             // console.log(this);
//             if(this.status === 200) {
//                 console.log(this.responseText);
//             }
//         }


//         this.xhr.send();
//     }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");



// class Request {

//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     //Get Request

//     get(url){

//         this.xhr.open("GET",url); // Bağlantı açık
        
//         this.xhr.onload = function(){

//             console.log(this);
//             if(this.xhr.status === 200) {
//                 console.log(this.xhr.responseText);
//             }
//         }.bind(this);


//         this.xhr.send();
//     }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");






class Request {

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //Get Request

    get(url,callback){

        this.xhr.open("GET",url); // Bağlantı açık
        
        this.xhr.onload = () => {

            // console.log(this);
            if(this.xhr.status === 200) {
                callback(null,this.xhr.responseText); // İsteğimiz bitti
            }
            else {
                // Hata Durumu
                callback("Bir hata oluştu",null);
            }
        };


        this.xhr.send();
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Başarılı
//         console.log(response);
//     }
//     else {
//         // Hata
//         console.log(err);
//     }
//     console.log(response);
// });



request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if(err === null){
        // Başarılı
        console.log(response);
    }
    else {
        // Hata
        console.log(err);
    }
});
