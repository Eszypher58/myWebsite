$(document).ready(function(){

	$(window).scroll(function(){

		//console.log("scrolling triggered");

		if ($(this).scrollTop() !== 0) {

			//console.log("scrolling triggered");
			//$(".navbar").css("background-color", "transparent");
			$(".navbar").css("background-color", "#000000");
			$("#navbarContainer").css("border", "initial");
			//$("#navbarContainer").css("position","fixed");

		} else {

			$(".navbar").css("background-color", "transparent");
			$("#navbarContainer").css("border-bottom", "1px white solid");

		}

		


	})

	$()




})