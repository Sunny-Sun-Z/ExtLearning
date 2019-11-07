Ext.define('MyApp.view.myviews.MyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mine',

    requires: [
        'Ext.MessageBox'
    ],


    onGo: function () {
        Ext.Msg.alert('Go', 'From my controller')
    },

    onAlert: function(){
        Ext.Msg.alert('Alert', 'Hello try Alert')
    }
})