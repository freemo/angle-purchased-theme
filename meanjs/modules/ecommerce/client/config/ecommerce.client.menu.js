(function() {
    'use strict';

    angular
        .module('app.ecommerce')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Ecommerce',
            state: 'app.ecommerce',
            type: 'dropdown',
            iconClass: 'icon-basket-loaded',
            position: 11,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.ecommerce', {
            title: 'Orders',
            state: 'app.orders',
        });
        Menus.addSubMenuItem('sidebar', 'app.ecommerce', {
            title: 'Order View',
            state: 'app.order-view',
        });
        Menus.addSubMenuItem('sidebar', 'app.ecommerce', {
            title: 'Products',
            state: 'app.products',
        });
        Menus.addSubMenuItem('sidebar', 'app.ecommerce', {
            title: 'Product View',
            state: 'app.product-view',
        });
        Menus.addSubMenuItem('sidebar', 'app.ecommerce', {
            title: 'Checkout',
            state: 'app.checkout',
        });
    }

})();