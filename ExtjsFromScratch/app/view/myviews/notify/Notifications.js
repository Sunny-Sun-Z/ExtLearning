Ext.define('MyApp.myviews.notify.Notifications',{
    extend: 'Ext.Panel',
    xtype: 'notifications',
    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],
    layout: 'fit',
    items: [{
        xtype: 'grid',
        store: {
            type: 'notifications',

        },
        columns:[
            {
                xtype: 'datecolumn',
                text:'Date',
                dataIndex: 'date'
            },
            {
                text: 'Desc',
                dataIndex: 'desc',
                flex: 1
            }
        ],
    
    }]
});

