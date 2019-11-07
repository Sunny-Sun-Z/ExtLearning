Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller:'main',
    cls: 'main',
    requires: [
        'Ext.Button'
    ],

    items: [{
        title: 'Home',
        cls: 'home',
        html: '<h1 class="banner">Hello World!</h1>',
        items: [{
            xtype: 'button',
            text: 'Go'
        }]
    }, {
        title: 'Notifications',
        cls: 'child',
        html: '<h1 class="banner">Hello World2222!</h1>',
    }, {
        title: 'Settings'
    }]
});