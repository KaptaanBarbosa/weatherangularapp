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
        }  
    }               
});


