(function() {
    'use strict';

    angular
        .module('app.blog')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Blog',
            state: 'app.blog',
            type: 'dropdown',
            iconClass: 'icon-pencil',
            position: 10,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.blog', {
            title: 'Blog',
            state: 'app.blog'
        });
        Menus.addSubMenuItem('sidebar', 'app.blog', {
            title: 'Post',
            state: 'app.blog-post'
        });
        Menus.addSubMenuItem('sidebar', 'app.blog', {
            title: 'Articles',
            state: 'app.articles'
        });
        Menus.addSubMenuItem('sidebar', 'app.blog', {
            title: 'Article View',
            state: 'app.article-view'
        });
    }

})();