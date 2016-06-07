




$(document).ready(function(){

		// Cookies.set("sugar", 0)
		// Cookies.set("chocolate", 0)
		// Cookies.set("lemon", 0)

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
	console.log(value)
	return value;  
}
	

	$("#zero-sugar").on('click', function(){
		Cookies.set("sugar", 0)

		$("#first").html('You have eaten ' + parseInt(Cookies.get("sugar")))
	});
		// Cookies.set("chocolate", 0)
		// Cookies.set("lemon", 0)

		

			// Cookies.set("sugar", $('#sugar').val());
			// Cookies.set("chocolate", $('#chocolate').val());
			// Cookies.set("lemon", $('#lemon').val());
			// Cookies.set("sugar", 0)
			// Cookies.set("chocolate", 0)
			// Cookies.set("lemon", 0)
			// clear("sugar","chocolate","lemon");


	$("#zero-choco").on('click', function(){
		Cookies.set("chocolate", 0)
		$("#second").html('You have eaten ' +  parseInt(Cookies.get("chocolate")))
	});

	$("#zero-lemon").on('click', function(){
		Cookies.set("lemon", 0)
		$("#third").html('You have eaten ' + parseInt(Cookies.get("lemon")));
	});	


		// $("#zero").on('click', function(){
		// Cookies.set("chocolate", 0)
		// $("#second").html('You have eaten ' +  parseInt(Cookies.get("chocolate")))
	
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










