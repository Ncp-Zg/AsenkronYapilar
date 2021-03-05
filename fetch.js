function getTextFile(){  // Text Dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
function getJsonFile(){ // Localdeki bir Json dosyasından Veri Alma

    fetch("fetch.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
fetch("https://api.exchangeratesapi.io/latest")
.then(response => response.json())
.then(data => {
    console.log(data.rates.TRY)

})
.catch(err => console.log(err));

}

getExternalAPI();
// getTextFile();
// getJsonFile();

//https://api.exchangeratesapi.io/latest