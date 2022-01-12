function Hello(nameP) {

    if (nameP == "") {
        return `Привет аноним!`;
    } else {
        return `Привет, ${nameP}!`;
    }
}


function HelloB() {
    let nameP = document.getElementById("idName").value;
    document.getElementById("idHello").innerHTML = Hello(nameP);
}