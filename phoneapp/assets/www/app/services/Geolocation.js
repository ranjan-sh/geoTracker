define(['require', 'lodash'],
    function (require, _) {

        var watchIDSet = [];

        function getCurrentPosition(Apperyio) {
            var $q = Apperyio.get('$q');

            return function(options) {
                var deferred = $q.defer(),
                    serviceSettings = Apperyio.EntityAPI("Geolocation_currentPosition"),
                    defaultOptions = serviceSettings.request.data,
                    resultOptions = _.extend({}, defaultOptions, options);

                if (_.isUndefined(serviceSettings.echo)) {
                    navigator.geolocation.getCurrentPosition(
                        deferred.resolve,
                        deferred.reject,
                        resultOptions);
                } else {
                    deferred.resolve(JSON.parse(serviceSettings.echo));
                }
                return deferred.promise;
            };
        }

        function watchPosition(Apperyio) {
            var $q = Apperyio.get('$q');

            return function(options) {
                var deferred = $q.defer(),
                    serviceSettings = Apperyio.EntityAPI("Geolocation_watchPosition"),
                    defaultOptions = serviceSettings.request.data,
                    resultOptions = _.extend({}, defaultOptions, options);

                if (_.isUndefined(serviceSettings.echo)) {
                    var watchID = navigator.geolocation.watchPosition(
                        function(success) {
                            deferred.notify({
                                result: success,
                                isSuccess: true
                            });
                        },
                        function(error) {
                            deferred.notify({
                                result: error,
                                isSuccess: false
                            });
                        },
                        resultOptions);
                    watchIDSet.push(watchID);
                    deferred.promise.watchId = watchID;
                } else {
                    deferred.notify(JSON.parse(serviceSettings.echo));
                }
                return deferred.promise;
            };
        }

        function clearWatch(Apperyio) {
            var $q = Apperyio.get('$q');

            return function(watchID) {
                var deferred = $q.defer(),
                    serviceSettings = Apperyio.EntityAPI("Geolocation_clearWatch");
                if (_.isUndefined(serviceSettings.echo)) {
                    var result = watchID ? [watchID.watchID] : watchIDSet;
                    if (watchID) {
                        navigator.geolocation.clearWatch(watchID.watchID);
                    } else {
                        _.each(watchIDSet, navigator.geolocation.clearWatch);
                        watchIDSet = [];
                    }
                    deferred.resolve(result);
                } else {
                    deferred.resolve(serviceSettings.echo);
                }
                return deferred.promise;
            };
        }

        return [{
            type: 'service',
            name: 'Geolocation_currentPosition',
            deps: ['Apperyio', getCurrentPosition]
        }, {
            type: 'service',
            name: 'Geolocation_watchPosition',
            deps: ['Apperyio', watchPosition]
        }, {
            type: 'service',
            name: 'Geolocation_clearWatch',
            deps: ['Apperyio', clearWatch]
        }];
    });