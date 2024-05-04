function load_quiz()
{
		spelling = new Array();
		for(i=0; i<10; i++){
			spelling[i] = document.getElementById("spelling" + i).innerHTML;
		}
}


function check(){
	guess = new Array();
	correct = 0;

	for(j=0; j<10; j++){
		guess[j] = document.getElementById("input" + j).value;
		document.getElementById("input" + j).style.display = "none";
		if(guess[j].toLowerCase() == spelling[j].toLowerCase()){
			document.getElementById("left" + j).style.color = "#00BB00";
			document.getElementById("right" + j).style.color = "#00BB00";
			document.getElementById("spelling" + j).style.display = "inline";
			correct++;
		}
		else{
			document.getElementById("left" + j).style.color = "#BB0000";
			document.getElementById("right" + j).style.color = "#BB0000";
			document.getElementById("spelling" + j).style.display = "inline";
			document.getElementById("spelling" + j).innerHTML = "Correct Spelling: " + spelling[j] + "<br><br> Your Spelling: " + guess[j];
		}
	}
	
	if(correct<5)	
	{
		document.getElementById("explain").innerHTML = "Good try! You got " + correct + " out of 10. Keep studying!";
	}
	else if ((correct<8) && (correct>4))
	{
		document.getElementById("explain").innerHTML = "Well done, " + correct + " out of 10. You&apos;re a competitive speller!";
	}
	else if (correct>7)
	{
		document.getElementById("explain").innerHTML = "Very well done. " + correct + " out of 10. You&apos;re an excellent speller!";
	}
}
