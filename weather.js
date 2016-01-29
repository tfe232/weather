$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup= "Current Forecast  is "+ data.currently.temperature + " with " + data.currently.summary+ " clouds"
    var markup2= "Current visibility is " +data.currently.visibility+" Miles"
    var markup3= "The three day forecast is  "+ data.daily.summary
    // End of your code

    $('.weather-report').html(markup);
    $('.weather-report2').html(markup2);
    $('.weather-report3').html(markup3);

  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
