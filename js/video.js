var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	console.log(video);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Video Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current video location is " + video.currentTime)
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log("Restarting the video" + video.currentTime)
		video.play();
	} else {
		video.currentTime += 15;
		console.log("New video location is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Changed");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").className = "video oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector(".video").className = "video"
});