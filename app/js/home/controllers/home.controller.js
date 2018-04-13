angular.module('myApp')

.controller('HomeController', ['$scope', 'getWeather', '$http',
  function($scope,getWeather, $http) {
    $scope.city = 'Bangalore'; // default city
    $scope.cityList =[];
    $scope.tableShowList = [];
    $scope.rowcount = 0;
    $scope.rowShowList = [];
    var valNum;

    
    
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
        data.data.list[index].dt_txt = getWeather.tConvert(data.data.list[index].dt_txt.substring(11,18));
        data.data.list[index].main.temp = getWeather.convertKelvinToCelsius(valNum);
        
       });

      });
    }
    $scope.searchCity();
    


     }
])
