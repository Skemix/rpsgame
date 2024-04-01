function playGame() {
  var userChoice = prompt("Your Choice: rock, paper, or scissors").toLowerCase();
  var computerChoices = ["rock", "paper", "scissors"];
  var computerChoice = computerChoices[Math.floor(Math.random() * 3)];

  var resultMessage = "Your Choice: " + userChoice + "<br>Computer's Choice: " + computerChoice;

  if (!computerChoices.includes(userChoice)) {
    resultMessage += "<br>Invalid choice! Please enter rock, paper, or scissors.";
  } else if (userChoice === computerChoice) {
    resultMessage += "<br>It's a Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += "<br>You Won!";
  } else {
    resultMessage += "<br>You Lost...";
  }

  // Display result using innerHTML
  document.getElementById("result").innerHTML = resultMessage;
}
