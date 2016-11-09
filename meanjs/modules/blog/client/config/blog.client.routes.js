(function() {
    'use strict';

    angular
        .module('app.blog')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.blog', {
                url: '/blog/list',
                title: 'Blog',
                templateUrl: 'modules/blog/client/views/blog.client.view.html',
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.blog-post', {
                url: '/blog/post',
                title: 'Post',
                templateUrl: 'modules/blog/client/views/blog-post.client.view.html',
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.articles', {
                url: '/blog/articles',
                title: 'Articles',
                templateUrl: 'modules/blog/client/views/blog-articles.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.article-view', {
                url: '/blog/article/:id',
                title: 'Article View',
                templateUrl: 'modules/blog/client/views/blog-article-view.client.view.html',
                resolve: helper.resolveFor('ui.select', 'summernote')
            });

    }
})();