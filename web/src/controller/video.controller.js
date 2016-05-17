(function (angular) {
    angular.module('bakalavr').controller('VideoController', Controller);

    Controller.$inject = [
        '$scope', 'clankService', '$sce', '$timeout'
    ];

    function Controller($scope, clank, $sce, $timeout) {
        var self = this;

        this.config = {
            sources: [],
            theme: "bower_components/videogular-themes-default/videogular.css"
        };

        this.videogular = {};
        this.onPlayerReady = function ($API) {
            self.videogular = $API;
        };

        this.streamVideo = function (data) {
            $timeout(function () {
                self.config.sources.push({
                    src: $sce.trustAsResourceUrl(data),
                    //src: data,
                    type: "video/mp4"
                });
                console.log('Video downloaded');

                self.videogular.changeSource(self.config.sources);
                self.videogular.play();
            });
        };

        this.session = clank.getSession().then(function (session) {
            self.session = session;

            self.session.subscribe('video', function (uri, payload) {
                switch (payload.msg) {
                    case 'stream':
                        self.streamVideo(payload.stream);
                        break;
                }
            });
            self.session.publish('video', {'msg': 'get'});
        });
    }
})(angular);