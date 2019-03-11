function startTime() {
	//making variables for seconds, minutes, hours
	var today = new Date();
		h = today.getHours();
		m = today.getMinutes();
		s = today.getSeconds();

		//making variabels of all the element of the clock
		kleinew = document.getElementById("kleinew");
		grotew = document.getElementById("grotew");
		clock = document.getElementById("divclock");

		//gettting the ammount of rotation voor each of hands
		roth = h*30+m*0.5;
		rotm = m*6;

		gradient1 = document.getElementById("gradient1");
		gradient2 = document.getElementById("gradient2");

	m = checkTime(m);
	s = checkTime(s);

	//Changing the gradient in the clock according to the time
	if (h <= 7 && h >= 0) {
		TweenMax.to(gradient1, 3, {stopColor: "#2C5364", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#0F2027", ease: Sine.easeOut})
	}

	else if (h >= 7 && h <= 9) {
		TweenMax.to(gradient1, 3, {stopColor: "#2C5364", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#ffd452", ease: Sine.easeOut})
	}

	else if (h >= 10 && h <= 11) {
		TweenMax.to(gradient1, 3, {stopColor: "#ffd452", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#6DD5FA", ease: Sine.easeOut})
	}

	else if (h >= 12 && h <= 17) {
		TweenMax.to(gradient1, 3, {stopColor: "#6DD5FA", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#2980B9", ease: Sine.easeOut})
	}

	else if (h >= 18 && h <= 19) {
		TweenMax.to(gradient1, 3, {stopColor: "#2980B9", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#fdbb2d", ease: Sine.easeOut})
	}
	else if (h >= 20 && h <= 21) {
		TweenMax.to(gradient1, 3, {stopColor: "#2980B9", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#373B44", ease: Sine.easeOut})
	}

	else {
		TweenMax.to(gradient1, 3, {stopColor: "#373B44", ease: Sine.easeOut})
		TweenMax.to(gradient2, 3, {stopColor: "#2C5364", ease: Sine.easeOut})
	}

	//rotations reset when minutes or hours hit zero so they don't spin counter clockwise
	if (h == 0 ) {
		TweenMax.to(kleinew, 0, {rotation:0});
	}

	if (m == 0) {
		TweenMax.to(grotew, 0, {rotation:0});
	}

	//animating the rotations on the hands
	TweenMax.to(clock, 3, {opacity: "1.0", ease: Sine.easeOut});
	TweenMax.to(kleinew, 3, {rotation:roth, ease: Sine.easeOut});
	TweenMax.to(grotew, 3, {rotation:rotm, ease: Sine.easeOut});
	

	//Puttinng the time on an digital clock
	document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 1000);
}


//Checking the date and displaying it
function checkDate() {
	var today = new Date();
		d = today.getDate();
		m = today.getMonth() + 1; 
		j = today.getFullYear();
	m = checkTime(m);
	d = checkTime(d);
	document.getElementById('date').innerHTML = d+ "-" + m + "-" + j;
}  


//Adds a zero in front when the number isn't two digits
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

