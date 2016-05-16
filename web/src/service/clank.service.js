(function (angular) {
    angular.module('bakalavr').factory('ClankService', Service);

    Service.$inject = [];

    function Service() {
        var self = this;

        this.clank = Clank.connect("ws://localhost:8080");
        this.session = null;

        self.clank.on("socket/connect", function (session) {
            self.session = session;
            console.log("Successfully Connected!");
        });

        self.clank.on("socket/disconnect", function (error) {
            console.log("Disconnected for " + error.reason + " with code " + error.code);
        });

        var factory = {
            'getClank': function () {
                return self.clank;
            },
            'getSession': function () {
                return self.session;
            }
        };

        return factory;
    }
})(angular);