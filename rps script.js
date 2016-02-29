/*Rock, Paper, Scissors*/

/*Variables*/
var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
var output = "Please enter a valid input!";
var valid = true; 
//var userChoice = document.getElementById("answer");
//var computerChoice = Math.random();
//var output = "Please enter a valid input!";
//var valid = true;

/*Computer randomizer*/
if (computerChoice < 0.34)
{
	computerChoice = "rock";
}
else if (computerChoice <= 0.67)
{
	computerChoice = "paper";
}
else
{
	computerChoice = "scissors";
}

//Winning hand decider
var compare = function(choice1, choice2)
{/*Final ending tag*/
	if (choice1 === choice2)
	{
		output = "The result is a tie!";
	}
	else if (choice1 === "rock")
	{/*First else if tag*/
		if (choice2 === "scissors")
		{
			output = "Rock wins";
		}
		else
		{
			output = "Paper wins";
		}
	}/*First else if tag*/
	else if (choice1 === "paper")
	{/*Second else if tag*/
		if (choice2 === "rock")
		{
			output = "Paper wins";
		}
		else
		{
			output = "Scissors wins";
		}
	}/*Second else if tag*/
	else if (choice1 === "scissors")
	{/*Third else if tag*/
		if (choice2 === "paper")
		{
			output = "Scissors wins";
		}
		else
		{
			output = "Rock wins";
		}
	}/*Third else if tag*/
}/*Final ending tag*/

//Logs
compare(userChoice, computerChoice);

console.log("Result: " + output);
console.log("Player: " + userChoice);
console.log("Computer: " + computerChoice);
console.log("valid = " + valid);

/* Variables for HTML display*/
var userOutput = ("Player chose: " + userChoice);
var computerOutput = ("Computer chose: " + computerChoice)

//Valid checker
if (output === "Please enter a valid input!")
{
	userOutput = "";
	computerOutput = "";
}