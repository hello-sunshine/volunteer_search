$(document).ready(function(){
	
	$('#second') .hide() .fadeIn(6000);
	$('#third') .fadeOut() .fadeIn('10000');
	$('#fourth') .fadeOut() .fadeIn('12000');

	}); //end ready
	$("#about" ) .on("click", function() {
		$(this).css("display", "none");
		$("#text") .append(" We are Amra, Joey and Olga: a bunch of girls who are happy to contribute to a good cause. We believe volunteering should be fun and easy for everyone!");
	});

