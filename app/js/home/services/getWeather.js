app.factory('getWeather', function($q,$http){

    return {
        getCityWeather: function(text){
            var searchparam = text;
            var deferObj  = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+searchparam+'&APPID=d7b33085cc9af5d287d200420538644d').then(function(data) {
                deferObj.resolve(data);
                            
              })
              .catch(function(error) {
                console.log(error);
                  deferObj.reject(error);
                  alert("city not found")
                
              })

              return deferObj.promise;
        },
        
        tConvert:function  (timeString) {
            var H = +timeString.substr(0, 2);
            var h = (H % 12) || 12;
            var ampm = H < 12 ? "AM" : "PM";
            timeString = h + timeString.substr(2, 3) + ampm;
            return timeString;
          },
          convertKelvinToCelsius: function (kelvin) {
            if (kelvin < (0)) {
              return 'below absolute zero (0 K)';
            } else {
              return parseFloat((kelvin-273.15)).toFixed(2).toString()+" C";
            }
          }  
    }               
});


