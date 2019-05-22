const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

diceGameFunction = function (userEntry) {
 let userEntryArray = [];
 let userEntryInt =13;
 let userEntrySplit = userEntry.split('d')
    userEntryArray = userEntrySplit
 console.log(userEntryArray);
 let resultTemp;

    let userDice = userEntryArray[0];
    let userFace = userEntryArray[2];

    let regex=/((\d+)d(\d+))([+-]\d+)?/;
    let regexMatch =userEntry.match(regex);
    
    console.log(userEntryArray);
if(regexMatch){

        if ((userDice > 0 && userDice < 101) && (userFace > 1 && userFace < 101)) {
            console.log("Test entrée");

            resultTemp = userDice * (Math.floor(Math.random() * userFace) + 1);
            console.log(resultTemp);


            return resultTemp;
        } else {
            //throw new Error("erreur lors de la saisie");
            let error = "erreur lors de la saisie";
            console.error("erreur lors de la saisie")
            return error;
        }
    } else {
    //throw new Error("erreur lors de la saisie");
    let error = "syntaxe incorrecte";
    console.error("syntaxe incorrecte")
    return error;
}
    }




rl.question('Entrez votre commande !', (userEntry) => {
    diceGameFunction(userEntry);
    console.log(`Merci de votre choix ! ${userEntry}`);

})






