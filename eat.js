function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", startRun)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", stopRun);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var choice = ["mamak","mcd","oneU","kfc","7-11"];
var color = ["red","blue","green","pink","black"]
var myVar = null;

function startRun() {
	myVar = setInterval(go, 100);
	function go() {
		var display = document.getElementById('restaurant');
		rand = getRandomInt(0, choice.length);
		display.style.color = color[rand];
		display.style.marginTop = "30px";
	    display.innerHTML = choice[rand];
	}
}

function stopRun() {
	clearInterval(myVar);
	var decision = document.getElementById('display');
	display.innerHTML = "Let's go to " + restaurant.innerHTML;
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);