var translateBtn = document.querySelector("#translate-btn")
var inputTxt = document.querySelector("#input-txt")
var outputText = document.querySelector(".output-box")
var apiUrl = "https://api.funtranslations.com/translate/yoda.json?text="

function translateUrl(text) {
    return apiUrl + text
}

function errorHandler(error) {
    console.log("Error Occured: " + error) //console the error message
    alert("API Server Error Occured, try again after an hour.") //alert the user
}

function clickHandler() {
    var textInput = inputTxt.value
    fetch(translateUrl(textInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputText.innerText = translatedText })
        .catch(errorHandler)
}

translateBtn.addEventListener("click", clickHandler)
