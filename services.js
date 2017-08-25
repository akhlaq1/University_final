var app = angular.module('myApp');

app.service('array_service',function () {

/*
    this.user_uid_func = function (uid) {
        user_uid = uid;
        console.log("user id from service"+user_uid)
    }*/

    this.viewData = function (data) {
       var obj_data = data;

        return obj_data


    }



});