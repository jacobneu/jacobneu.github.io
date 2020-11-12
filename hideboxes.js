$( document ).ready(function() {
  console.log("Hi");
  $( ".initHide" ).hide( "slow", function() {});

$( ".target" ).click(function() {
  $( this ).parent().find( ".initHide" ).show( "slow", function() {});
  $( this ).hide( "slow", function () {});
});
$( "#clickme" ).click(function() {
    console.log("Blah");
});
});
