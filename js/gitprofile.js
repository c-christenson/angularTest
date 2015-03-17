$(document).ready(function() {

	$('.gitprofile').on('submit', function(e) {
    
    e.preventDefault();

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('input.username').val();

    var template = $('template').html();

    var info = $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template,info));
    }).fail(function() {
      $('.container').prepend("User not found");
    }).always(function() {
      $('input.username').val('');
    });
  });
});