Ext.define('MyApp.myviews.MyView1', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.Button',
        'Ext.field.Text',
       // 'Ext.tree.View'
    ],
    controller: 'mine',
    items: [
        // {
        //     title:'Nav',
        //     xtype: ''
        // },
        {
            title: 'Home My',
            html: '<h1 class="main-banner"> Hellow Sunny</h1>',

            viewModel: {
                data: { username: 'shufang sun' }
            },

            items: [
                {
                    xtype: 'button',
                    text: 'Go',
                    disabled: '{!userName}',
                    handler: 'onGo'
                },

                {
                    xtype: 'textfield',
                    label: 'The User name',
                    bind: '{username}',
                    listeners: {
                        action: 'onGo'
                    }
                }
            ]
        },
        {
            title: 'Notifications My',
            html: '<h2>These are some words</h2>',

            items:[
                {xtype: 'notifications'},
                {
                    xtype: 'button',
                    text: 'Try Alert',
                    handler: "onAlert"
                }
            ]
           
        },
        {
            title: 'Settings My'
        },

     
       
    ],


})


