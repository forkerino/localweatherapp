let tempK = 0;

$(document).ready(function() {
    $('#toggle-one').bootstrapToggle();

  var weatherApiUrl = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(loc) {
      weatherApiUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + loc.coords.latitude + "&lon=" + loc.coords.longitude + "&APPID=5d93be3dc78bf88bb80545bad5e5536d";
      getWeather(weatherApiUrl);
    });
  } else {
    $(body).innerHTML("No geolocation");
  }
  
  $("#toggletemp").change(function(){
    if ($(this).prop('checked')){
      $(".temp").html(Math.round(tempK - 273.15) + " °C");
    } else {
      $(".temp").html(Math.round(tempK * 9/5 - 459.67) + " °F");
    }
  });
  
});

function getWeather(url) {
  $.getJSON(url, function(json) {
    tempK = json.main.temp;
    var weatherDescription = json.weather["0"].description[0].toUpperCase() + json.weather["0"].description.slice(1);
    $(".name").html(json.name);
    $(".temp").html(Math.round(tempK - 273.15) + " °C");
    $(".weather").html(weatherDescription);
    
    var icon = json.weather["0"].icon;
    setIcon(icon);
    setBackground(icon);
   });
}

function setIcon(icon){
  switch (icon) {
    case "01d":
      $(".icon").html('<i class="wi wi-day-sunny"></i>' );
      break;
    case "01n": // clear night
      $(".icon").html('<i class="wi wi-night-clear"></i>' );
      break;
    case "02d": // few clouds day
      $(".icon").html('<i class="wi wi-day-cloudy"></i>' ); 
      break;
    case "03d": // cloudy day
    case "04d":
      $(".icon").html('<i class="wi wi-cloudy"></i>' ); 
      break;
    case "02n": // few clouds night
      $(".icon").html('<i class="wi wi-night-alt-cloudy"></i>' );
      break;
    case "03n": // cloudy night
    case "04n":
      $(".icon").html('<i class="wi wi-cloudy"></i>' );
      break;
    case "09d": // rainy day
    case "10d":
      $(".icon").html('<i class="wi wi-rain"></i>' );
      break;
    case "09n": // rainy night
    case "10n":
      $(".icon").html('<i class="wi wi-night-alt-rain"></i>' );
      break;
    case "11d": // thunderstorms day
      $(".icon").html('<i class="wi wi-thunderstorm"></i>' );
      break;
    case "11n": // thunderstorms night
      $(".icon").html('<i class="wi wi-night-alt-thunderstorm"></i>' );
      break;
    case "13d": // snowy day
      $(".icon").html('<i class="wi wi-day-snow"></i>' );
      break;
    case "13n": // snowy night
      $(".icon").html('<i class="wi wi-night-alt-snow"></i>' );
      break;
    case "50d": // misty day
      $(".icon").html('<i class="wi wi-day-fog"></i>' );
      break;
    case "50n": // misty night
      $(".icon").html('<i class="wi wi-night-fog"></i>' );
      break;  
  }      
}

function setBackground(icon){
  switch(icon){
    case "01d": // clear day
      $("body").css("background-image", "url(http://imgur.com/tTQc6cc.jpg)");
      break;
    case "01n": // clear night
      $("body").css("background-image", "url(http://imgur.com/y8iIGpJ.jpg)");
      break;
    case "02d": // few clouds day
      $("body").css("background-image", "url(http://imgur.com/nEDGnIz.jpg)");
      break;
    case "02n": // few clouds night
      $("body").css("background-image", "url(http://imgur.com/CtTd9on.jpg)");
      break;
    case "03d": // cloudy day
    case "04d":
      $("body").css("background-image", "url(http://imgur.com/ePZ5Rx1.jpg)");
      break;
    case "03n": // cloudy night
    case "04n":
      $("body").css("background-image", "url(http://imgur.com/zJbiYn1.jpg)");
      break;
    case "09d": // rainy day
    case "10d":
      $("body").css("background-image", "url(http://imgur.com/DjBZN6W.jpg)");
      break;
    case "09n": // rainy night
    case "10n":
      $("body").css("background-image", "url(http://imgur.com/XRaWxVn.jpg)");
      break;
    case "11d": // thunderstorms day
      $("body").css("background-image", "url(http://imgur.com/pzUpywI.jpg)");
      break;
    case "11n": // thunderstorms night
      $("body").css("background-image", "url(http://imgur.com/JUKVTOf.jpg)");
      break;
    case "13d": // snowy day
      $("body").css("background-image", "url(http://imgur.com/IXqb7Oh.jpg)");
      break;
    case "13n": // snowy night
      $("body").css("background-image", "url(http://imgur.com/CElSqeY.jpg)");
      break;
    case "50d": // misty day
      $("body").css("background-image", "url(http://imgur.com/lYbRcNt.jpg)");
      break;
    case "50n": // misty night
      $("body").css("background-image", "url(http://imgur.com/oLCRAVK.jpg)");
      break;
  }  
}