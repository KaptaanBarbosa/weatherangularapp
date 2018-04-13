angular.module('myApp')

.controller('HomeController', ['$scope', 'getWeather', '$http',
  function($scope,getWeather, $http) {
    $scope.city = 'Bangalore'; // default city
    $scope.cityList =[];
    $scope.tableShowList = [];
    $scope.rowcount = 0;
    $scope.rowShowList = [];
    var valNum;

    function convertKelvinToCelsius(kelvin) {
      if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
      } else {
        return parseFloat((kelvin-273.15)).toFixed(2).toString()+" C";
      }
    }
    function tConvert (timeString) {
      var H = +timeString.substr(0, 2);
      var h = (H % 12) || 12;
      var ampm = H < 12 ? "AM" : "PM";
      timeString = h + timeString.substr(2, 3) + ampm;
      return timeString;
    }
    $scope.searchCity = function(){
      getWeather.getCityWeather($scope.city).then(function(data){
        data.data.list = data.data.list.slice(0,20);
        $scope.rowShowList = data.data.list;
        $scope.rowcount = $scope.rowcount+1;
        $scope.cityList.push($scope.city);
        $scope.tableShowList.push(data.data.list);
        data.data.list.forEach(function(element, index) {
        valNum = parseFloat(data.data.list[index].main.temp).toFixed(2);
        console.log(data.data.list[index].dt_txt.substring(10,18));
        data.data.list[index].dt_txt = tConvert(data.data.list[index].dt_txt.substring(11,18));
        data.data.list[index].main.temp = convertKelvinToCelsius(valNum);
        
       });

      });
    }
    $scope.searchCity();
    


     }
])
