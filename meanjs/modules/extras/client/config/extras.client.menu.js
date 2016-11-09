(function() {
    'use strict';

    angular
        .module('app.extras')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Extras',
            state: 'app.extras',
            type: 'dropdown',
            iconClass: 'icon-cup',
            position: 9,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Forum',       state:'app.forum'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Mailbox',     state:'app.mailbox.folder'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Timeline',    state:'app.timeline'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Calendar',    state:'app.calendar'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Invoice',     state:'app.invoice'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Search',      state:'app.search'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Todo List',   state:'app.todo'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Profile',     state:'app.userprofile'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Code Editor', state:'app.code-editor'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Bug Tracker',     state:'app.bug-tracker'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Contact Details', state:'app.contact-details'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Contacts',        state:'app.contacts'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Faq',             state:'app.faq'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'File Manager',    state:'app.file-manager'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Followers',       state:'app.followers'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Help Center',     state:'app.help-center'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Plans',           state:'app.plans'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Project Details', state:'app.project-details'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Projects',        state:'app.projects'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Settings',        state:'app.usersettings'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Social Board',    state:'app.social-board'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Team Viewer',     state:'app.team-viewer'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Vote Links',      state:'app.vote-links'});

    }

})();