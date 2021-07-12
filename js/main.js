function start() {
    let output = document.getElementById("output");

    let userChoice = prompt("What do you choose: rock, paper or scissors?");
    if ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) {
        alert("Your value has to correspond to one of the following values: rock, paper or scissors.");
    } else {
        let uc = userChoice.charAt(0).toUpperCase();
        let win = false;

        let compChoice = Math.random();
        if (compChoice < 0.34) {
            compChoice = "rock";
        } else if (compChoice < 0.67) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";
        }
        let cc = compChoice.charAt(0).toUpperCase();

        let html = "";

        if (uc == cc) {
            html += "It is a tie!";
        } else if ((uc == "P" && cc == "R") || (uc == "S" && cc == "P") || (uc == "R" && cc == "S")) {
            win = true;
            html += "Congratulations! You have won!";
        } else {
            win = false;
            html += "You have lost. Try again!";
        }
        html = html.toUpperCase().fontcolor("orange").fontsize("5px");

        let btn = document.getElementById("btn");
        btn.value = "Try again";

        output.innerHTML = html + "<br>" + "You vs Computer<br>" + userChoice + " vs " + compChoice + "<br>";
    }
}