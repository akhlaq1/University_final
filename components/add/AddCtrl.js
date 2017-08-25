var app = angular.module('myApp');
app.controller('AddCtrl',function ($state,$firebaseArray,$stateParams,array_service) {
    var vm = this;
  vm.writeUserData = function () {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log(user)
                this.user_uid = user.uid;
                var refNew = firebase.database().ref('/user/'+user.uid);
                // refNew.child(user.uid).set(vm.data)
                var arr1 = $firebaseArray(refNew);
                console.log(arr1)
                arr1.$add(vm.data).then(function () {
                    console.log("Adding data successful")
                }).catch(function (err) {
                    console.log(err)
                });
                console.log("Write user function triggered")
            }
            else {
                // No user is signed in.
                console.log("No user is signed in")
            }
        })}




});