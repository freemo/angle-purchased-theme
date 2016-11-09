/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];
    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
          // Setup the layout mode 
          $rootScope.app.useFullLayout = true;
          $rootScope.app.hiddenFooter = true;
          $rootScope.app.layout.isCollapsed = true;
          
          // Restore layout for demo
          $scope.$on('$destroy', function(){
              $rootScope.app.useFullLayout = false;
              $rootScope.app.hiddenFooter = false;
          });

        }

        function activate() {

          // Set the tree data into the scope
          vm.filetree_data = filetree;

          // Available themes
          vm.editorThemes = ['3024-day','3024-night','ambiance-mobile','ambiance','base16-dark','base16-light','blackboard','cobalt','eclipse','elegant','erlang-dark','lesser-dark','mbo','mdn-like','midnight','monokai','neat','neo','night','paraiso-dark','paraiso-light','pastel-on-dark','rubyblue','solarized','the-matrix','tomorrow-night-eighties','twilight','vibrant-ink','xq-dark','xq-light'];

          vm.editorOpts = {
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true,
            theme: 'mbo',
            viewportMargin: Infinity
          };

          vm.refreshEditor = 0;

          // Load dinamically the stylesheet for the selected theme
          // You can use ozLazyLoad to load also the mode js based 
          // on the file extension that is loaded (see handle_filetree)
          vm.loadTheme = function() {
            var BASE = 'vendor/codemirror/theme/';
            $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
            vm.refreshEditor = !vm.refreshEditor;
          };
          // load default theme
          vm.loadTheme(vm.editorOpts.theme);
          // Add some initial text
          vm.code = '// Open a file from the left menu \n' +
                        '// It will be requested to the server and loaded into the editor\n' +
                        '// Also try adding a New File from the toolbar\n';


          // Tree

          var selectedBranch;
          vm.handle_filetree = function(branch) {
            
            selectedBranch = branch;

            var basePath = 'server/editor/';
            var isFolder = !!branch.children.length;

            console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

            if ( ! isFolder ) {

              $http
                .get( basePath + branch.path )
                .success(function(response){
                  
                  console.log('Loaded.. ' + branch.path);
                  // set the new code into the editor
                  vm.code = response;
                  
                  vm.editorOpts.mode = detectMode(branch.path);
                  console.log( 'Mode is: ' + vm.editorOpts.mode);

                });
            }
          };

          function detectMode(file) {
            var ext = file.split('.');
            ext = ext ? ext[ext.length - 1] : '';
            switch (ext) {
              case 'html':  return 'htmlmixed';
              case 'css':   return 'css';
              default:      return 'javascript';
            }
          }

          var tree;
          tree = vm.filetree = {};

          // Adds a new branch to the tree
          vm.new_filetree = function() {
            var b;
            b = tree.get_selected_branch();

            // if we select a leaf -> select the parent folder
            if ( b && b.children.length === 0 ) {
              b = tree.get_parent_branch(b);
            }
            
            return tree.add_branch(b, {
              'label': 'another.html',
              'path': 'source/another.html'
            });
          };
        }
    }
})();
