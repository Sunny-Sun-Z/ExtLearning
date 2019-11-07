Ext.onReady(function(){
    Ext.create('Ext.Panel', {
        renderTo: 'helloExt',
        height:500,
        width:600,
        title: 'Hi Ext js',
        html: '<h1>first Ext program</h1>'
    })
})


/*
 * This call registers your application to be launched when the browser is ready.
 */
// Ext.application({
//     name: 'MyApp',
//     extend: 'MyApp.Application',
//     requires: [
//         'MyApp.*'
//     ],
   
//     launch: function () {
      

  
//     }
    
// });


