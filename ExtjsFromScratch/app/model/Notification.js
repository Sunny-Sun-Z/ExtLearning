Ext.define('MyApp.model.Notification', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'date',
        type: 'date'
    }]
})





// Ext.define('My.sample.Person', {
//     name: 'Unknown',

//     constructor: function(name) {
//         if (name) {
//             this.name = name;
//         }
//     },

//     eat: function(foodType) {
//         alert(this.name + " is eating: " + foodType);
//     }
// });

// var bob = Ext.create('My.sample.Person', 'Bob');

// bob.eat("Salad"); // alert("Bob is eating: Salad");