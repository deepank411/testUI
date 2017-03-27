$(document).ready(function(){

	var flag = true;

	$("#openChatBox").click(function(){
		console.log('clicked');
		$(".PixiboMainContainer").slideToggle("slow");
		$(".loader").fadeIn(500);
		$(".chat-bubble, .chat-bubble1").hide().each(function(i) {
			$(this).delay(i*1500).fadeIn(1500);
		});
		$("#piBody").scrollTop($("#piBody")[0].scrollHeight);
		setTimeout(function() {
			$(".loader img").fadeOut();
			$(".footer-btn").slideToggle("slow");
		}, 5000);
		$(".container").addClass("dark-bg");
	});

	$(".close-popup").click(function(){
		$(".PixiboMainContainer").slideToggle("slow");
		$(".container").removeClass("dark-bg");
	});

	setTimeout(function(){
		$('.custom-btn').text('Tap to talk to Pi').fadeIn();
	}, 2000);

	$(".footer-btn").click(function(){
		if(flag == true){
			console.log('clicks', flag);
			$(".message").show();
			$(".chat-bubble1").addClass("chat-bubble1__highlight");
		}
		else if(flag == false){
			console.log('clicks', flag);
			$(".chat-bubble1").css({
				"opacity": '0.5',
				"pointer-events": 'none'
			});
			$(".footer-btn").fadeOut();
			$(".loader img").fadeIn();
			$(".chat-bubble2").html("Tell me my size").fadeIn();
			$("#piBody").scrollTop($("#piBody")[0].scrollHeight);
		}
	});

	// Slider Logic

	$("#height").slider({
		range: "min",
		min: 100,
		max: 250,
		value: 158,
		slide: function( event, ui ) {
			classModification();
			console.log(ui.value);
			$("#amount").val( ui.value );
		}
	});

	$("#amount").val($("#height").slider("value"));

	$(".decreaseVal1").click(function(){
		var currentVal = $("#height").slider("value");
		var min = $("#height").slider("option", "min");
		console.log(currentVal, min);
		if(currentVal > min){
			classModification();
			var newVal = currentVal - 1;
			$("#height").slider("value" , newVal);
			$("#amount").val( newVal);
		}
	});

	$(".increaseVal1").click(function(){
		var currentVal = $("#height").slider("value");
		var max = $("#height").slider("option", "max");
		console.log(currentVal, max);
		if(currentVal < max){
			classModification();
			var newVal = currentVal + 1;
			$("#height").slider("value" , newVal);
			$("#amount").val( newVal);
		}
	});

	$("#weight").slider({
		range: "min",
		min: 20,
		max: 120,
		value: 60,
		slide: function( event, ui ) {
			classModification();
			console.log(ui.value);
			$("#amount1").val( ui.value );
		}
	});

	$("#amount1").val($("#weight").slider("value"));

	$(".decreaseVal2").click(function(){
		var currentVal = $("#weight").slider("value");
		var min = $("#weight").slider("option", "min");
		console.log(currentVal, min);
		if(currentVal > min){
			classModification();
			var newVal = currentVal - 1;
			$("#weight").slider("value" , newVal);
			$("#amount1").val( newVal);
		}
	});

	$(".increaseVal2").click(function(){
		var currentVal = $("#weight").slider("value");
		var max = $("#weight").slider("option", "max");
		console.log(currentVal, max);
		if(currentVal < max){
			classModification();
			var newVal = currentVal + 1;
			$("#weight").slider("value" , newVal);
			$("#amount1").val( newVal);
		}
	});

	var classModification = function(){
		console.log('inside function');
		$(".footer-btn").removeClass("footer-btn__disabled");
		$(".chat-bubble1").removeClass("chat-bubble1__highlight");
		$(".message").hide();
		flag = false;
	}

	$(".tag").click(function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
    });

});
