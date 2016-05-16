




$(document).ready(function(){

	$("#first").html('You have eaten ' + parseInt(Cookies.get("sugar")))
	$("#second").html('You have eaten ' +  parseInt(Cookies.get("chocolate")))
	$("#third").html('You have eaten ' + parseInt(Cookies.get("lemon")));

	

	$("#sugar").click(function(){

		$("#first").html('You have eaten ' + cookieCounter("sugar", parseInt(Cookies.get("sugar"))))
	});

	$("#chocolate").click(function(){

		$("#second").html('You have eaten ' + cookieCounter("chocolate", parseInt(Cookies.get("chocolate"))))
	});

	$("#lemon").click(function(){

		$("#third").html('You have eaten ' + cookieCounter("lemon", parseInt(Cookies.get("lemon"))))
	});


		




function cookieCounter(key, value){
	value +=1;
	Cookies.set(key, value);
	return value;  
}

	$("#trash").on('click', function(){
		Cookies.set("sugar", 0)
		Cookies.set("chocolate", 0)
		Cookies.set("lemon", 0)

		

			// Cookies.set("sugar", $('#sugar').val());
			// Cookies.set("chocolate", $('#chocolate').val());
			// Cookies.set("lemon", $('#lemon').val());
			// Cookies.set("sugar", 0)
			// Cookies.set("chocolate", 0)
			// Cookies.set("lemon", 0)
			// clear("sugar","chocolate","lemon");
		$("#first").html('You have eaten ' + parseInt(Cookies.get("sugar")))
		$("#second").html('You have eaten ' +  parseInt(Cookies.get("chocolate")))
		$("#third").html('You have eaten ' + parseInt(Cookies.get("lemon")));

	});

});










