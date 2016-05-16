(function (angular) {
    angular.module('bakalavr').factory('ClankService', Service);

    Service.$inject = [];

    function Service() {
        var self = this;

        this.clank = Clank.connect("ws://localhost:8080");

        clank.on("socket/connect", function(session){
            console.log("Successfully Connected!");
        });

        clank.on("socket/disconnect", function(error){
            //error provides us with some insight into the disconnection: error.reason and error.code

            console.log("Disconnected for " + error.reason + " with code " + error.code);
        });

        var factory = {
            'getClank': function () {
                return self.clank;
            }
        };

        return factory;
    }
})(angular);