'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
window.onload = function(){

    var count = document.querySelectorAll('li')
      alert(count.length);

      document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2> You have '
      + count.length + ' items in your shopping cart</h2>');
}

function insertAddItem () {
  var newInput = document.createElement('input');
  newInput.setAttribute("placeholder", "Type to add");
  let cart = document.getElementsByTagName("ul");
  cart[0].after(newInput);
  newInput.setAttribute("id", "input-text");

  let newButton = document.createElement('button');
  newButton.innerHTML = 'Add Items';
  newButton.setAttribute("id", "add-button")
  let nextBUtton = document.getElementsByTagName("input");
  nextButton[0].after(newButton);

  newButton.onclick = addItem;
}

function insertRemoveItemExistingItems (){
  let cart = document.getElementById("cart");
  for (let i = 0; i < cart.children.length; i++){
    insertRemoveItem(cart.children[i]);
  }
}
