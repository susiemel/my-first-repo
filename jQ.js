
// $("header ul li:last-child").click(function (){
// 	alert("Hello World");
// });

$("header ul li:last-child").click(function (){
	$('#cart').toggleClass('open');
});