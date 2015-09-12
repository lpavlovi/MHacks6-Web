define([
    'angular'
], function() {
  'use strict';
  return ['$http', function($http) {
    var baseUrl = 'https://lambda-face-recognition.p.mashape.com';

    $http.defaults.headers.common['X-Mashape-Authorization'] = 'WMXsfuXLgQmshpWuJCQoY2aD0JOSp1HuW5Bjsn3huiysxt3Ms5';
    this.trainAlbum = function(id, imgUrl) {
      var url = baseUrl + '/album_train?album=testme_mhacks2015&albumkey=5ed53809ad53a6190194c25b525102778e9c842148463b2f102b1a9483fc1df6';
      var data = { 'entryid':id,
                   'urls':imgUrl
      };
      return $http.post(url, data);
    };
    this.viewAlbum = function() {
      var url = baseUrl +'/album?album=testme_mhacks2015&albumkey=5ed53809ad53a6190194c25b525102778e9c842148463b2f102b1a9483fc1df6';
      return $http.get(url);
    };
    this.rebuildAlbum = function() {
      var url = baseUrl + '/album_rebuild?album=testme_mhacks2015&albumkey=5ed53809ad53a6190194c25b525102778e9c842148463b2f102b1a9483fc1df6';
      return $http.get(url);
    };
  }];
});
