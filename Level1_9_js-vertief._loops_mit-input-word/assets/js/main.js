let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

let wordsOutput = [];

function add() {
    let addition = document.getElementById("add").value;
    words.push(addition);
    console.log(words);
    check();
}


function check() {
    wordsOutput = [];
    const length = Number(document.getElementById("length").value);
    console.log(length);

    for (let i = 0; i < words.length; i++) {
        if (words[i].length === length) {
            wordsOutput.push(words[i]);
        } else {
            continue;
        }
    }
    console.log(wordsOutput);
    if (wordsOutput.length > 0) {
        document.getElementById("output").innerHTML = "<li>" + wordsOutput.join("</li><li>") + "</li>";
    } else {
        document.getElementById("output").innerHTML = "Keine passenden Wörter vorhanden"
    }
}
