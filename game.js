class Game {
    constructor(turnLeft = 10, turnPlayed, playerTurn, choosePLayer) {
        this.turnLeft = turnLeft;
        this.turnPlayed = turnPlayed;
        this.turnPlayed = playerTurn;

    }
    newTurn() {
        return `Il reste ${game.turnLeft} tours à jouer.`;
    }
    startTurn() {
        return `A vous de jouer le tour ${game.turnLeft - 1}.`;
    }
    playerTurn() {
        return `It's time for Player to play`;
    }
    choosePlayer(){
        var askPlayer = prompt("Choose player : \n-1 Player 1\n-2 Player 2\n-3 Player 3\n-4 Player 4\n-5 Player 5")
    }
}
const game = new Game ;
console.log(game.choosePlayer())
console.log(game.newTurn())
console.log(game.startTurn())
console.log(game.playerTurn())

