$(document).ready(function(){

	$("#aboutMePort").hide();

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

		$('.hideItem').each( function(i){

			//console.log("hide triggered");

				var bottom_of_object = $(this).offset().top + $(this).height()/5;
				console.log("element height:" + $(this).height())
			//console.log("botObj:" + bottom_of_object);

				var bottom_of_window = $(window).scrollTop() + $(window).height();

			//	console.log("botWin:" + bottom_of_window);

	        /* If the object is completely visible in the window, fade it in */
				if( bottom_of_window > bottom_of_object ){
			
					$(this).animate({'opacity':'1'}, 1000);

				}

		}); 


	})

	$("#startButton").on("click touchstart", function(){

		//console.log("clicked");
		$("html,body").animate({

			scrollTop: ($("#aboutMe").offset().top - 50)

		}, "slow");


	});

	$("li").on("click", function(){

		var link = $(this).children().attr("data_moveto");

		//console.log(link);

		//console.log("clicked");
		$("html,body").animate({

			scrollTop: ($("#" + link).offset().top - 50)

		}, "slow");

	});

	$(document).on("click touchstart", ".cart", function(){

		var id = $(this).attr("id");

		console.log(id);

		if (id === "aboutMePara") {

			$(this).hide(500);
			$("#Lcircle").attr("class", "fa fa-circle-o");
			$("#Rcircle").attr("class", "fa fa-circle")
			$("#aboutMePort").show(500);

		} else {

			$(this).hide(500);
			$("#Lcircle").attr("class", "fa fa-circle");
			$("#Rcircle").attr("class", "fa fa-circle-o")
			$("#aboutMePara").show(500);

		}

	});



})