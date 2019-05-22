const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

diceGameFunction = function (userEntry) {

    let userSplit=userEntry.split(" ");

 let resultTemp;


    //let regex = /((\d+)d(\d+))([+-]\d+)?$/;
    let regex = /((\d+)d(\d+))([+-](\d+))?$/
    //let regexMatch = userSplit[0].match(regex);
    //console.log("Test Groupe "+regexMatch[0]+" "+regexMatch[1]+" "+regexMatch[2]+" "+regexMatch[3]+" "+regexMatch[4]+" ");
    let modificator = 0;
    let operator = '+';

    for(var i=0; i<userSplit.length;i++){
        let regexMatch = userSplit[i].match(regex);
    if(regexMatch){
    if (!isNaN(regexMatch[2]) && !isNaN(regexMatch[3])) {
        if ((regexMatch[2] > 0 && regexMatch[2] < 101) && (regexMatch[3] > 1 && regexMatch[3] < 101)) {

            if(regexMatch[4] =! null && regexMatch[5] != null) {
                modificator = Number(regexMatch[5]);
                operator = regexMatch[4];
                if(operator > 0 && operator <101) {



                    console.log("Test entrée");

                    resultTemp = regexMatch[2] * (Math.floor(Math.random() * regexMatch[3])) + operator;
                    console.log(resultTemp);


                    return resultTemp;
                }else{
                    let error = "erreur de la saisie du modificator; il ne peut pas excéder 5";
                    console.error("erreur de la saisie du modificator; il ne peut pas excéder 5")
                    return error;
                }
            }else{
                let error = "erreur de la saisie du modificator";
                console.error("erreur de la saisie du modificator")
                return error;
            }

            resultTemp = regexMatch[2] * (Math.floor(Math.random() * regexMatch[3])) + operator+modificator;
            console.log(resultTemp);
            return resultTemp;

        }else {
            //throw new Error("erreur lors de la saisie");
            let error = "erreur lors de la saisie";
            console.error("erreur lors de la saisie")
            return error;
        }
    }
    }else{
        let error = "syntaxe incorrecte";
        console.error("syntaxe incorrecte")
        return error;
    }
    }
}



rl.question('Entrez votre commande !', (userEntry) => {
    diceGameFunction(userEntry);
    console.log(`Merci de votre choix ! ${userEntry}`);

})






