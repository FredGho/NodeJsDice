// File import for testing


const RollDiceCode = require('../../src/RollDiceCode');

describe('RollDiceCode', () => {
    describe('diceGameFunction', () => {
        it.only('should return "lance X dé(s) à Y face(s)"', () => {
            let result = 3 + 'd' + 6;
            let func = diceGameFunction(result);
            assert.isBelow(func,19);
            assert.isAbove(func,2);
        });

        it('should return an error if syntax isn\'t respected', () => {
            let result = 'x'+'d'+6;
            expect(diceGameFunction(result)).to.equal("syntaxe incorrecte");

        });
        it.only('should return an error if user entry is < 1 dice (X)', () => {
            let result = 0+'d'+6;
            expect(diceGameFunction(result)).to.equal("erreur lors de la saisie");
        });
        it.only('should return an error if user entry is > 100 dice (X)', () => {
            let result = 101+'d'+6;
            expect(diceGameFunction(result)).to.equal("erreur lors de la saisie")
        });
        it.only('should return an error if user entry is < 2 face (Y)', () => {

            let result = 3+'d'+1;
            expect(diceGameFunction(result)).to.equal("erreur lors de la saisie")
        });
        it.only('should return an error if user entry is > 100 faces (Y)', () => {

            let result = 3+'d'+101;
            expect(diceGameFunction(result)).to.equal("erreur lors de la saisie")
        });

        it('should return an error if result is not the sum of roll dices', () => {

        });
        it.only('should return an error if the modificator is > 100', () => {
            let result = 0+'d'+6+'+'+101;
            expect(diceGameFunction(result)).to.equal("erreur de la saisie du modificator; il ne peut pas excéder 5")
        });
        it('should return an error if number of result is not equal to the number of the serie', () => {

        });
        it('should return an error if syntax of modificator is wrong', () => {
            let result = 3+'d'+6+'+'+' '+6;
            assert.isAbove(checkModificatorSyntax(result),6);
        });
        it('should return an error if modificator value is > 100 ', () => {
            let z = 101;
            let result = 3+'d'+6+'+'+z;
            assert.isAbove(checkModificatorValue(result),101);
        });
        it('should return an error if modificator value is < 0 ', () => {
            let z = "-"+1;
            let result = 3+'d'+6+'+'+z;
            assert.isBelow( checkModificatorValue(result),-1);
        });
        it('should roll defaut behavior if there is no argument with the command (1d6)', () => {
            let result = "";
            assert.isBelow(checkModificatorValue(result),1);
            assert.isAbove(checkModificatorValue(result),1);
        });

        it(' return an valid result if modificator value is < -100 ', () => {

        });





        it('', () => {

        });
    });
});