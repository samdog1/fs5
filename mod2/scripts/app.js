(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('BoughtController', BoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

BoughtController.$inject = ['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.addItem = function (item) {
    ShoppingListCheckOffService.addItem(item);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
  {"name":"pickles",      "quantity":"1 jar"},
  {"name":"mustard",      "quantity":"2 jars"},
  {"name":"sliced turkey","quantity":"1/2 lb"},
  {"name":"wheat bread",  "quantity":"1 loaf"},
  {"name":"milk",         "quantity":"1 pint"},
  {"name":"chips",        "quantity":"2 bags"}];
  var itemsBought =[];

  service.buyItem = function (itemIndex) {
    var itemBought = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1); // remove from toBuy array
    itemsBought.push(itemBought);    // add to bought array
  };

  service.getItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
