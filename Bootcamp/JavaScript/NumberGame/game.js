var secretnumber = 6;

var realnumber =Number(prompt("Guess a number"));


if(realnumber === secretnumber)
{
    alert("You guessed the number!");
}

else if(releaseEvents > secretnumber)
{
    alert("Too high guess again")
}

else 
{
    alert("Too low guess again")
}