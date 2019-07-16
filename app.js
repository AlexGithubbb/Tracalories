// Storage Controller



//Item Controller
const ItemCtrl = (function() {
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  const data = {
    items: [
      { id: 0, name: 'Ice cream', calories: 1000 },
      { id: 1, name: 'Chesse', calories: 800 },
      { id: 2, name: 'Eggs', calories: 200 }
    ],
    currentItem: null,
    currentCalories: 0
  };

  // Public methods
  return {
    logData: function (){
      console.log(data);
    }
  }
})();




// UI Controller
const UICtrl = (function(){

  // Public methods
  return {

  }
})();



// App Controller
const AppContrl = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function() {
      console.log('Initialize the App...');
    }
  };
})(ItemCtrl, UICtrl);

AppContrl.init();
