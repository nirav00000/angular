var app = angular.module('app',['ui.router'])


.config(function($stateProvider,$urlRouterProvider,$locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  
  .state('first',{
    url:'/first',
    abstract: true,
    templateUrl:'first.html',
    controller:"fc", 


  })

  // .state('/',{
  //   url:'/',
  //   ///abstract: true,
  //   templateUrl:'index.html',
  //   //controller:"fc", 


  // })

  .state('second',{
    url:'/second',
    templateUrl:'second.html'

  })

  // .state('child',{
  //   parent:'first',
  //   url:'/child',
  //   templateUrl:'first_child.html'

  // })

  .state('child', {
      parent:'first',
      url:'/child',
      //template: 'hey nirav I am  1st!'
      views: {
          //'': { templateUrl:'first_child.html'},
          'one@first': { templateUrl:'second.html' },
          'two@first': { templateUrl:'third.html'}
      }
      
  })

  .state('third',{
    url:'/third',
    templateUrl:'third.html'

  });

  // .state("otherwise", {
  //   url: "*path",
  //   templateUrl: "page not found"
  // });

  

  // .when('/third',{
  //   templateUrl:'third.html' 

  // });

  // .otherwise({
  //   templateUrl:'first.html',
  //   controller:"fc"
  // });





  //$locationProvider.html5Mode(true);

  $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });



})
 
.controller('BeerCounter', function($scope, $locale,service_parent) {
  
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];


  $scope.data1 =
  [
   {name:'birav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'airav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'cirav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'dirav',surname:'jobanputra',like:'1',dislike:'2'}
  ]


  //service_parent.service_child(0);
  
  $scope.like = function(xxx)
  {
      xxx.like = service_parent.service_child(xxx.like);
  }

  $scope.dislike = function(xxx)
  {
      xxx.dislike = xxx.dislike - 1;
  }

  $scope.sortdata = function(xxx)
  {
      console.log(xxx);
      $scope.xyz = xxx;

  }

  $scope.xyz = 'name';


  
})

.controller("fc", function($scope,$window) {
  
  $scope.name = "nirav";

   ///$window.location.reload() 
  
});