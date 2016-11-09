(function() {
    'use strict';

    angular
        .module('app.extras')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.timeline', {
                url: '/extras/timeline',
                title: 'Timeline',
                templateUrl: 'modules/extras/client/views/timeline.client.view.html'
            })
            .state('app.calendar', {
                url: '/extras/calendar',
                title: 'Calendar',
                templateUrl: 'modules/extras/client/views/calendar.client.view.html',
                resolve: helper.resolveFor('moment', 'ui.calendar')
            })
            .state('app.invoice', {
                url: '/extras/invoice',
                title: 'Invoice',
                templateUrl: 'modules/extras/client/views/invoice.client.view.html'
            })
            .state('app.search', {
                url: '/extras/search',
                title: 'Search',
                templateUrl: 'modules/extras/client/views/search.client.view.html',
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.todo', {
                url: '/extras/todo',
                title: 'Todo List',
                templateUrl: 'modules/extras/client/views/todo.client.view.html',
                controller: 'TodoController',
                controllerAs: 'todo'
            })
            .state('app.userprofile', {
                url: '/extras/profile',
                title: 'Profile',
                templateUrl: 'modules/extras/client/views/profile.client.view.html',
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.code-editor', {
                url: '/extras/code-editor',
                templateUrl: 'modules/extras/client/views/code-editor.client.view.html',
                controller: 'CodeEditorController',
                controllerAs: 'coder',
                resolve: {
                    deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                    filetree: ['LoadTreeService', function(LoadTreeService) {
                        return LoadTreeService.get().$promise.then(function(res) {
                            return res.data;
                        });
                    }]
                }
            })
            // Forum
            // -----------------------------------
            .state('app.forum', {
                url: '/extras/forum',
                title: 'Forum',
                templateUrl: 'modules/extras/client/views/forum.client.view.html'
            })
            .state('app.forum-topics', {
                url: '/extras/forum/topics/:catid',
                title: 'Forum Topics',
                templateUrl: 'modules/extras/client/views/forum-topics.client.view.html'
            })
            .state('app.forum-discussion', {
                url: '/extras/forum/discussion/:topid',
                title: 'Forum Discussion',
                templateUrl: 'modules/extras/client/views/forum-discussion.client.view.html'
            })

            // Mailbox
            // -----------------------------------
            .state('app.mailbox', {
                url: '/extras/mailbox',
                title: 'Mailbox',
                abstract: true,
                templateUrl: 'modules/extras/client/views/mailbox.client.view.html'
            })
            .state('app.mailbox.folder', {
                url: '/folder/:folder',
                title: 'Mailbox',
                templateUrl: 'modules/extras/client/views/mailbox-inbox.client.view.html'
            })
            .state('app.mailbox.view', {
                url: '/{mid:[0-9]{1,4}}',
                title: 'View mail',
                templateUrl: 'modules/extras/client/views/mailbox-view.client.view.html',
                resolve: helper.resolveFor('ngWig')
            })
            .state('app.mailbox.compose', {
                url: '/compose',
                title: 'Mailbox',
                templateUrl: 'modules/extras/client/views/mailbox-compose.client.view.html',
                resolve: helper.resolveFor('ngWig')
            })
            // Misc
            // -----------------------------------
            .state('app.bug-tracker', {
                url: '/bug-tracker',
                title: 'Bug Tracker',
                templateUrl: 'modules/extras/client/views/bug-tracker.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.contact-details', {
                url: '/contact-details',
                title: 'Contact Details',
                templateUrl: 'modules/extras/client/views/contact-details.client.view.html',
            })
            .state('app.contacts', {
                url: '/contacts',
                title: 'Contacts',
                templateUrl: 'modules/extras/client/views/contacts.client.view.html'
            })
            .state('app.faq', {
                url: '/faq',
                title: 'Faq',
                templateUrl: 'modules/extras/client/views/faq.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.file-manager', {
                url: '/file-manager',
                title: 'File Manager',
                templateUrl: 'modules/extras/client/views/file-manager.client.view.html',
                resolve: helper.resolveFor('filestyle')
            })
            .state('app.followers', {
                url: '/followers',
                title: 'Followers',
                templateUrl: 'modules/extras/client/views/followers.client.view.html'
            })
            .state('app.help-center', {
                url: '/help-center',
                title: 'Help Center',
                templateUrl: 'modules/extras/client/views/help-center.client.view.html'
            })
            .state('app.plans', {
                url: '/plans',
                title: 'Plans',
                templateUrl: 'modules/extras/client/views/plans.client.view.html'
            })
            .state('app.project-details', {
                url: '/project-details',
                title: 'Project Details',
                templateUrl: 'modules/extras/client/views/project-details.client.view.html'
            })
            .state('app.projects', {
                url: '/projects',
                title: 'Projects',
                templateUrl: 'modules/extras/client/views/projects.client.view.html'
            })
            .state('app.usersettings', {
                url: '/settings',
                title: 'Settings',
                templateUrl: 'modules/extras/client/views/settings.client.view.html',
                resolve: helper.resolveFor('filestyle')
            })
            .state('app.social-board', {
                url: '/social-board',
                title: 'Social Board',
                templateUrl: 'modules/extras/client/views/social-board.client.view.html'
            })
            .state('app.team-viewer', {
                url: '/team-viewer',
                title: 'Team Viewer',
                templateUrl: 'modules/extras/client/views/team-viewer.client.view.html'
            })
            .state('app.vote-links', {
                url: '/vote-links',
                title: 'Vote Links',
                templateUrl: 'modules/extras/client/views/vote-links.client.view.html'
            })
            ;

    }
})();