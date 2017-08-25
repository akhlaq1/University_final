var app = angular.module('myApp');
app.controller("signOutCtrl",function ($state) {
    var vm = this;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("Sign out func triggered")

            firebase.auth().signOut().then(function() {
                console.log('Signed Out');
                vm.message = "You have been successfully signed out"
            }).catch(function(error) {
                console.error('Sign Out Error', error);
                vm.message = error;
            })

        }
        else {
            // No user is signed in.
            console.log("No user is signed in")
            $state.go('login')
        }
    })


})