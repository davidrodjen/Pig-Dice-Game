function generateRandomValue(minValue, maxValue) {
    //use random to generate a number between min and max
    var random = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current").innerText;
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if (currentPlayerName != player1Name) {
        document.getElementById("current").innerText = player1Name;
        currentPlayerName = player1Name;
    }
    else if (currentPlayerName != player2Name) {
        document.getElementById("current").innerText = player2Name;
        currentPlayerName = player2Name;
    }
}
window.onload = function () {
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    //set player 1 and player 2 scores to 0
    document.getElementById("score1").innerHTML = "0";
    document.getElementById("score2").innerHTML = "0";
    var player1Score = 0;
    var player2Score = 0;
    document.getElementById("score1").value = player1Score.toString();
    document.getElementById("score1").value = player2Score.toString();
    //verify each player has a name
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    //if both players don't have a name display error
    if (player1Name == "") {
        alert("Player one needs a name or they do not really exist");
    }
    else if (player2Name == "") {
        alert("Player two needs a name or else they do not really exist");
    }
    else if (player1Name == "" && player2Name == "") {
        alert("Both players need to have a name!");
    }
    else {
        //if both players do have a name start the game!
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        //lock in player names and then change players
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    var roll = generateRandomValue(1, 6);
    //if the roll is 1
    if (roll == 1) {
        currTotal = 0;
        document.getElementById("total").value = currTotal.toString();
        //  change players
        changePlayers();
    }
    //if the roll is greater than 1
    if (roll > 1) {
        //  add roll value to current total
        currTotal += roll;
        //set the die roll to value player rolled
    }
    if (roll == 1) {
        document.getElementById("die").value = "";
    }
    //set the die roll to value player rolled
    else {
        document.getElementById("die").value = roll.toString();
    }
    //display current total on form
    document.getElementById("total").value = currTotal.toString();
}
function holdDie() {
    //get the current turn total
    var currTotal = parseInt(document.getElementById("total").value);
    //let holdCurrTotal = rollDie();
    //let turnTotal = currTotal;
    var currPlayer = document.getElementById("current").innerText;
    //determine who the current player is
    var player1 = document.getElementById("player1").value;
    //Pulling was incorrect, including for emphasis
    //let score1 = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
    var player2 = document.getElementById("player2").value;
    //Pulling was incorrect, including for emphasis
    //let score2 = parseInt((<HTMLInputElement>document.getElementById("score2")).value);
    if (currPlayer == player1) {
        //score1 += currTotal; //This doubled the amount and increased improperly
        currTotal += parseInt(document.getElementById("score1").value);
        document.getElementById("score1").value = currTotal.toString();
    }
    if (currPlayer == player2) {
        //score2 += currTotal; //This doubled the amount and increased improperly
        currTotal += parseInt(document.getElementById("score2").value);
        document.getElementById("score2").value = currTotal.toString();
    }
    //add the current turn total to the player's total score
    //reset the turn total to 0
    var turnTotal = 0;
    document.getElementById("total").value = turnTotal.toString();
    winner();
    //change players
    changePlayers();
}
function winner() {
    //playerOnescore
    var playerOneScore = parseInt(document.getElementById("score1").value);
    //playerTwoScore
    var playerTwoScore = parseInt(document.getElementById("score2").value);
    //player's name
    var currPlayer = document.getElementById("current").innerText;
    //Determines winner based on score reaching 100
    if (playerOneScore >= 100) {
        alert(currPlayer + " is the winner!");
    }
    if (playerTwoScore >= 100) {
        alert(currPlayer + " is the winner!");
    }
}
