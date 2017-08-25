var app = angular.module('myApp');
app.controller('AddCtrl',function ($state,$firebaseArray) {
    var vm = this;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                vm.writeUserData = function () {
                    console.log(user)
                    this.user_uid = user.uid;
                    var refNew = firebase.database().ref('/user/' + user.uid);
                    // refNew.child(user.uid).set(vm.data)
                    var arr1 = $firebaseArray(refNew);
                    console.log(arr1)
                    arr1.$add(vm.data).then(function () {
                        console.log("Adding data successful")
                    }).catch(function (err) {
                        console.log(err)
                    });

                }
            }
            else {
                // No user is signed in.
                console.log("No user is signed in")
                $state.go('login')
            }
        })




});