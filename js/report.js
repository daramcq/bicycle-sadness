$('#accident_choice').mouseover(function(){
	$('#mouseover').html('Accident');
});
$('#accident_choice').mouseout(function(){
	$('#mouseover').html('');
});

$('#accident_choice').click(function(){
	makeOpaque();
	$('#accident_choice').css('opacity',1.0);
});

$('#theft_choice').mouseover(function(){
	$('#mouseover').html('Bike Theft');
});
$('#theft_choice').mouseout(function(){
	$('#mouseover').html('');
});
$('#theft_choice').click(function(){
	makeOpaque();
	$('#theft_choice').css('opacity',1.0);
});

$('#general_choice').mouseover(function(){
	$('#mouseover').html('Other Hazard');
});
$('#general_choice').mouseout(function(){
	$('#mouseover').html('');
});
$('#general_choice').click(function(){
	makeOpaque();
	$('#general_choice').css('opacity',1.0);
});

function makeOpaque(){
	$('#accident_choice').css('opacity',0.4);
	$('#theft_choice').css('opacity',0.4);
	$('#general_choice').css('opacity',0.4);
}