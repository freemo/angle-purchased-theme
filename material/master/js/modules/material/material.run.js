(function() {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('app.material')
        .run(materialRun)
        ;
    materialRun.$inject = ['$http', '$templateCache'];
    function materialRun($http, $templateCache){
      var urls = [
        'app/img/icons/share-arrow.svg',
        'app/img/icons/upload.svg',
        'app/img/icons/copy.svg',
        'app/img/icons/print.svg',
        'app/img/icons/hangout.svg',
        'app/img/icons/mail.svg',
        'app/img/icons/message.svg',
        'app/img/icons/copy2.svg',
        'app/img/icons/facebook.svg',
        'app/img/icons/twitter.svg'
      ];

      angular.forEach(urls, function(url) {
        $http.get(url, {cache: $templateCache});
      });

    }

})();
