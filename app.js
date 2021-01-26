var btnClick=document.querySelector("#btn-click");
var outputDiv=document.querySelector("#output");
var txtInput=document.querySelector("#txt-input");

var inputText=txtInput.value;
inputText=inputText.toUpperCase();
const apiURL="https://api.clashofclans.com/v1/players/%23"+inputText;

const clashToken= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNlY2FkMTNmLTU1OWYtNGI5NC04MjNlLTFhNWVhNGU4NjhlOCIsImlhdCI6MTYxMTY1Nzc1OSwic3ViIjoiZGV2ZWxvcGVyLzJhOTNiOGU2LTBmMGMtODFkNy1iN2FhLWRmNDZmNGU3YTE0OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny4zNi4xMTcuMjMzIl0sInR5cGUiOiJjbGllbnQifV19.oNcGSQZcjU2b709TNav7bMqWGt0IK4BmWsSrlAwfENP4sfJqH4GMmbCFVmqiKSHreTaefcO0EWM8sAleRWoBMQ'

function errorHandler(error){
    console.log("error occured ", error);
    alert("some error occured, please try again after sometimes")

}

function clickHandler(){
    console.log(inputText);

    fetch(apiURL, {
        headers: new Headers({
            'Authorization':clashToken
        })
    })
    .then(response=>response.json)
    .then(json=>{
        console.log(json)
    })
    .catch(errorHandler);




}









btnClick.addEventListener("click", clickHandler);