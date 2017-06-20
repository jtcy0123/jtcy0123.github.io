//Write appropriate functions here for the oven. You may want to consider the following:
//1. A restart button is created when the user clicks the stop button.
//2. Now that you have created a restart button, think of what should happen when the restart button is clicked (refer back to the demo to help you).
//3. If you encountered any bugs in the demo, this is also the place where you can improve the demo's code.
//4. Some functions that you may find useful: getElementById, removeChild, innerHTML, setAttribute, appendChild, insertBefore.

function restartOven() {
	clearCookies();
	document.getElementById("timer").innerHTML = "";
	document.getElementById("cookie-status").innerHTML = "";
	document.getElementById("final-tray-container").innerHTML = "";
	document.getElementById("final-statement").innerHTML = "";
	currentTime = -1;
	ovenAlreadyRan = false;
}

function createRestartBtn() {
	restartBtn = document.getElementById("final-statement");
	restartBtn.innerHTML = "<input type='button' onclick='restartOven()' value='Restart'/>";
	// restartBtn.innerHTML = "<input type='button' value='Restart' onClick='window.location.reload()''>";
}

function createBakedCookieImg() {
	cookieImg = document.createElement('img');
	cookieImg.setAttribute('src','img/cookie.jpg');
	size = '30px';
	cookieImg.style.width = size;
	cookieImg.style.height = size;
	cookieImg.style.margin = '3px';
	return cookieImg;
}

function createBurntImg() {
	burntImg = document.createElement('img');
	burntImg.setAttribute('src','img/burnt.jpg');
	size = '30px';
	burntImg.style.width = size;
	burntImg.style.height = size;
	burntImg.style.margin = '3px';
	return burntImg;
}

function stopBaking() {
	disMsg = document.getElementById("final-tray-container");
	ovenTray = document.getElementById('tray');
	time = getCurrentTime()

	if (!timerRunning) {
		disMsg.innerHTML = "You have not started baking the cookies yet!";
	}
	else {
		endTimer();
		if (time < 11) {
			disMsg.innerHTML = "Not yet lah! Click 'Start' to continue.";
			ovenAlreadyRan = false;
		}
		else if (time < 16) {
			ovenTray.innerHTML = '';
			for (var i =0; i < cookieCount; i++) {
				ovenTray.appendChild(createBakedCookieImg());
			}
			disMsg.innerHTML = "Enjoy the cookies!";
		}
		else {
			ovenTray.innerHTML = '';
			for (var i =0; i < cookieCount; i++) {
				ovenTray.appendChild(createBurntImg());
			}
			disMsg.innerHTML = "You may eat the burnt cookies if you want.";
		}
		createRestartBtn();
	}
}

function endTimerFunc() {
	stopBtn = document.getElementById("stop-btn");
	stopBtn.addEventListener("click", stopBaking);
}

document.addEventListener('DOMContentLoaded', endTimerFunc);