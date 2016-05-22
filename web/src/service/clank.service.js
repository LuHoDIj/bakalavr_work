(function (angular) {
    angular.module('bakalavr').factory('clankService', Service);

    Service.$inject = ['$q'];

    function Service($q) {
        var self = this;

        this.clank = Clank.connect("ws://localhost:8080");
        this.session = null;

        var defer = $q.defer();
        self.clank.on("socket/connect", function (session) {
            self.session = session;
            defer.resolve(self.session);
            console.log("Successfully Connected!");
        });
        this.session = defer.promise;

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