
app.controller('mainCtrl', function($scope, mainService) {
    
    $scope.removeQuote = function(newQuotes1) {
        mainService.removeQuote(newQuotes1);
    };
    
     

    $scope.quotes = mainService.getData();
    
    
    $scope.addData = function(text, name) {
        mainService.addData(text, name);
    }
   
 
});