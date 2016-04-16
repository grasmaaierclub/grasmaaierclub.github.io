
var spreukCounter = 0;
var spreuken = [{
	spreukcontent:"Es je peloeze schoone groen, dan meugde Karel zijn ma doen.",
	spreukfooter:"Anoniem lid van het bestuurscommité.",
				},
	{
	spreukcontent:"Beter één euro in de hand, dan tweehonderd op de roulette.",
	spreukfooter:"Anoniem en onfortuinlijk lid van het bestuurscommité.",
				},
	{
	spreukcontent:"Pastop, webben wel ne schoone sleutelhanger gehad ze.",
	spreukfooter:"Anoniem en voldaan lid van het bestuurscommité.",
				}
				];

function changeSpreuk(){
	spreukCounter = (spreukCounter+1)%spreuken.length;
	document.getElementById("spreukcontent").innerHTML = spreuken[spreukCounter].spreukcontent;
	document.getElementById("spreukfooter").innerHTML = spreuken[spreukCounter].spreukfooter;
}

setInterval(changeSpreuk,8000);