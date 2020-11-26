jQuery("#home").ready(function($) {

  $('#one').click(function() {
    $('#reveal').removeAttr('class').addClass('bg1');
  });
  $('#two').click(function() {
    $('#reveal').removeAttr('class').addClass('bg2');
  });
  $('#three').click(function() {
    $('#reveal').removeAttr('class').addClass('bg3');
  });

});
