/*	Evan Combs
	SDI 0213
	Project 2
*/

var strategist = "Strategist Joe";
var generals = ["General Sampson", "General Salvador"];
var colonels = ["Arnold", "Brown", "Jose", "Reggie", "Liam"];
var battalions = ["Alpha", "Bravo", "Gamma", "Tango", "Omega"];

var battalionSize = 1000;
var day;


var Write = function(message)
{
	console.log(message);
}

var ChooseGeneral = function()
{
	var randomNumber = Math.round(Math.random());
	return randomNumber;
}

var ColonelSpeachIntro = function(string1, string2)
{
	return (string1 + ' is with ' + string2 + ' formulating an attack plan.');
}

function WhenToAttack(input1)
{
	if(input1 === true)
	{
		day = "today";
	}
	else
	{
		day = "tomorrow";
	}
}

var ColonelSpeach = function(number, array)
{
	for (var i = 0; i < array.length; i++)
	{
		Write('With ' + array[i] + ' Battalion we have ' + ((i + 1) * number) + ' soldiers');
	}
	return array;
}

var Orders = function(number)
{
	var placements = ["right flank", "left flank", "center", "center", "reserve"];
	var integer = number - 1;
	while(integer >= 0)
	{
		Write(colonels[integer] + ' you will take ' + battalions[integer] + ' up the ' + placements[integer]);
		integer--;
	}
	return integer;
}

var Bravery = function(input1, input2)
{
	if (input1 === "Brown" || input2 === "Liam")
	{
		return true;
	}
	else
	{
		return false;
	}
}

//final output
var chosen = ChooseGeneral();
Write(ColonelSpeachIntro(generals[chosen], strategist));
Write(ColonelSpeach(battalionSize, battalions));
Write('It will be no easy feet to win, but I have complete faith in these men and complete faith in you. When I come out of that tent with or orders we will execute those orders, and we will destroy our enemy.');
WhenToAttack(Bravery(colonels[1], colonels[4]));
Write('With all five colonels in the tent, ' + generals[chosen] + ' begins to talk. "We are going to battle ' + day + ' colonels. This is a dangerous plan, but it is the only way we will win this battle');
Write(Orders(colonels.length));