// Storage Controller

//Item Controller
const ItemCtrl = (function() {
  class Item {
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
    },

    addItem: function (name, calories){
      let ID;
      // check id condition
      if(data.items.length > 0){
        ID = data.items[data.items.length -1].id + 1;
      }else{
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories);

      // create new item object
      newItem = new Item(ID, name, calories);

      // push new item into data
      data.items.push(newItem);

      return newItem;
    }
    // logData : data
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn : '.add-btn',
    itemNameInput : '#item-name',
    itemCaloriesInput: '#item-calories',
  };
  // public methods
  return {
    populateItemList: function(items) {
      // console.log(items);
      let html = '';
      items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-pencil" id="edit-item" ></i>
          </a>
        </li>`;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function(){
      return UISelectors;
    },

    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem: function(newItem){
      // create list item
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // add ID
      li.id = `item-${newItem.id}`
      // add properties
      li.innerHTML = `<strong>${newItem.name}: </strong> <em>${newItem.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-pencil" id="edit-item" ></i>
          </a>`;
      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    }
  };
})();

// App Controller
const AppContrl = (function(ItemCtrl, UICtrl) {
  // Load Events Listener
  const loadEventListener = function(){
    // get UI Selectors
    const UIselectors = UICtrl.getSelectors();
    
    // add item event
    // target to add meal button
   document.querySelector(UIselectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  const itemAddSubmit = function(e){
    // get input from UI controller
    const input = UICtrl.getItemInput();
    // check if both are filled
    if(input.name !== '' && input.calories !== ''){
      // Add item to data structure
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);
    }
    e.preventDefault();
  }
  // Public methods
  return {
    init: function() {
      // console.log('Initialize the App...');
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // Populate list with items
      UICtrl.populateItemList(items);

      // load event listeners
      loadEventListener();
    }
  };
})(ItemCtrl, UICtrl);

AppContrl.init();
