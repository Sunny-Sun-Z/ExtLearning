Ext.define('MyApp.store.Notifications',{
    extend: 'Ext.data.Store',
    alias:'store.notifications',

    model:'MyApp.model.Notification',
    data: [
        {
            date:'2017-05-20',
            desc: 'This is the first data model try'
        }
    ]
})