// Storage Controller

//Item Controller
const ItemCtrl = (function() {
  class item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }
  // const item = function(id, name, calories) {
  //   this.id = id;
  //   this.name = name;
  //   this.calories = calories;
  // };
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
    logData: function() {
      console.log(data);
    },
    getItems: function() {
      return data.items;
    }
    // logData : data
  };
})();

// UI Controller
const UICtrl = (function() {

const UISelector = {
  id: '#item-list'
}
  // public methods
  return {
    populateItemList: function(items) {
      // console.log(items);
      let html = '';
      items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories}Calories</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-pencil" id="edit-item" ></i>
          </a>
        </li>`;
      });
      // Insert list items
      document.querySelector(UISelector.id).innerHTML = html;
    }
  };
})();


// App Controller
const AppContrl = (function(ItemCtrl, UICtrl) {


  // Public methods
  return {
    init: function() {
      // console.log('Initialize the App...');
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

AppContrl.init();
