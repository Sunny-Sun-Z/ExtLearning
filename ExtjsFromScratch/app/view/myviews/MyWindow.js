Ext.define ('MyApp.view.myviews.MyWindow',{
    extend: 'Ext.Component',
    isWindow: true,
    config: {
        title: 'My Own Window',

        bottomBar:{
            height: 50,
            resizable: true
        }
    },

    applyTitle: function(title){
        if(!Ext.isString(title) ||title.length===0){
            alert ('Error: Title must be a valid non-empty string' );
        }
        else
        {
            return title;
        }
    },

    applyBottomBar: function(bottomBar1){
        if(bottomBar1){
            if(!this.bottomBar){
                //console.log("what is this:", this),
                //console.log("what is this bottomBar", this.bottomBar)
                return Ext.create('MyApp.view.myviews.WindowBottomBar', bottomBar1)
            }
            else{
                this.bottomBar.setConfig(bottomBar1);
            }
        }
    }
});


Ext.define('MyApp.view.myviews.WindowBottomBar', {
    config: {
        height: 50,
        resizable: true
    }
 });