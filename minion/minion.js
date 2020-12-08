var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-center");
var outputDiv = document.querySelector("#output");

 //txtInput.value="9";
 //outputDiv.innerText =  txtInput.value;
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; 

    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            console.log(json.contents.text);
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)