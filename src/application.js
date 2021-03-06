thermostat = new Thermostat();
$('#temperature').text(thermostat.temp);

$( document ).ready(function() {
	 $( "#temperature-up" ).click( function() {
      thermostat.up();
      $('#temperature').text(thermostat.temp);
  });
   $( "#temperature-down" ).click( function() {
      thermostat.down();
      $('#temperature').text(thermostat.temp);
  });
   $( "#temperature-reset" ).click( function() {
      thermostat.resetButton();
      $('#temperature').text(thermostat.temp);
  });
  $( "#powersaving-on" ).click( function() {
    thermostat.powerSavingModeOn();
    $('#temperature').text(thermostat.temp);
    $(this).css('background-color', 'green')
    $('#powersaving-off').css('background-color', 'white')
  });
  $( "#powersaving-off" ).click( function() {
    thermostat.powerSavingModeOff();
    $('#temperature').text(thermostat.temp);
    $(this).css('background-color', 'red')
    $('#powersaving-on').css('background-color', 'white')
  });
});