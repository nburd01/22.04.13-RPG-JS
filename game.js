class Game {
    constructor(newTurn) {
        this.turnLeft = turnLeft;
        this.players = players;
        this.newTurn = newTurn;
    }

   newTurn(turnLeft) {
        return `Il reste ${game.turnLeft} tours à jouer.`;
    }
    // while players alive >= 1 alors on toune

    players() {
        return `It's time for Player to play`;
    }
    choosePlayer() {
        var askPlayer = prompt("Choose player : \n-1 Player 1\n-2 Player 2\n-3 Player 3\n-4 Player 4\n-5 Player 5")
    }
}



