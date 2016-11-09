
(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];
    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.items = [
            {
              todo: {title: 'Meeting with Mark at 7am.', description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. '},
              complete: true
            },
            {
              todo: {title: 'Call Sonya. Talk about the new project.', description: ''},
              complete: false
            },
            {
              todo: {title: 'Find a new place for vacations', description: ''},
              complete: false
            }
            ];
          
          vm.editingTodo = false;
          vm.todo = {};

          vm.addTodo = function() {
            
            if( vm.todo.title === '' ) return;
            if( !vm.todo.description ) vm.todo.description = '';
            
            if( vm.editingTodo ) {
              vm.todo = {};
              vm.editingTodo = false;
            }
            else {
              vm.items.push({todo: angular.copy(vm.todo), complete: false});
              vm.todo.title = '';
              vm.todo.description = '';
            }
          };
          
          vm.editTodo = function(index, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.todo = vm.items[index].todo;
            vm.editingTodo = true;
          };

          vm.removeTodo = function(index/*, $event*/) {
            vm.items.splice(index, 1);
          };
          
          vm.clearAll = function() {
            vm.items = [];
          };

          vm.totalCompleted = function() {
            return $filter('filter')(vm.items, function(item){
              return item.complete;
            }).length;
          };

          vm.totalPending = function() {
            return $filter('filter')(vm.items, function(item){
              return !item.complete;
            }).length;
          };

        }
    }
})();
