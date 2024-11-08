

function countCharacters() {
    const text = document.getElementById("textInput").value;
    const count = text.length;
    displayResult(`Character Count: ${count}`);
}

function convertToUpper() {
    const text = document.getElementById("textInput").value;
    displayResult(`Uppercase: ${text.toUpperCase()}`);
}

function convertToLower() {
    const text = document.getElementById("textInput").value;
    displayResult(`Lowercase: ${text.toLowerCase()}`);
}

function countWords() {
    const text = document.getElementById("textInput").value.trim();
    const words = text === "" ? 0 : text.split(/\s+/).length;
    displayResult(`Word Count: ${words}`);
}



function displayResult(resultText) {
    document.getElementById("result").innerText = resultText;
}
