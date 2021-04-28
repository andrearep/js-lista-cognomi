var lastnameList = ["Pinocchio", "Gatto", "Volpe", "Grillo", "Geppeto"]
var orderedList = []

// Chiediamo il cognome dell'Utente
var userLastname = prompt("Prego inserire il cognome");

//Inseriamo il cognome nell'array
lastnameList.push(userLastname);

while (lastnameList.length > 0) {
    var index = 0;
    minore = lastnameList[0];

    for (var i = 1; i < lastnameList.length; i++) {
        //confrontiamo la parola che viene prima in ordine alfabetico
        //nel caso in cui ci sia una stringa  che viene prima in ordine alfabetico allora diventera minore
        //usiamo il toLowerCase altrimenti l'ordine non sarebbe fedele nel caso in cui l'utente inserisca il cognome con la lettera minuscola
        if (minore.toLowerCase() > lastnameList[i].toLowerCase()) {
            minore = lastnameList[i];
            //salviamo l'indice per sapere quale elemento eliminare dalla lista
            index = i;
        }
    }
    orderedList.push(minore);
    lastnameList.splice(index, 1);
}

//stampiamo i nomi nella lista e la posizione
for (var i = 0; i < orderedList.length; i++) {
    document.getElementsByClassName("lista")[i].innerHTML = orderedList[i];
    //salviamoci la posizione in cui si trova il nostro utente
    if (orderedList[i] == userLastname)
        var position = i + 1;
}
document.getElementsById("msg").innerHTML = "in lista sei il numero " + position;
