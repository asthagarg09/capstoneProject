var app=angular.module("myApp",[]);
    app.directive("fileInput",function($parse){
        return {
            link:function($scope, element, attrs){
                element.on("change",function(event){
                    var files = event.target.files;
                    console.log(files[0].name);
                });
            }          
        }

    });
console.log("sukh");