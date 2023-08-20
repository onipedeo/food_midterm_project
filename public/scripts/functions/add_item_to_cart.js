import { functions } from './functions_index.js';

export const addItemToCart = (itemName, itemPrice) => {
  const $cart = $("#cart");
  const htmlId = itemName.replace(/\s/g, "-");

  // if item is already in cart, increase quantity
  if ($cart.find("#" + htmlId).length > 0){
    const $quantity = $("#cart")
      .find("#" + htmlId)
      .children(".cart-item-quantity");

    const newQuantity = Number($quantity.text()) + 1;
    $quantity.text(newQuantity);

  } else {
    // add item to cart
    const itemHtml = `
      <div class="cart-item" id=${htmlId}>
        <span class="cart-item-name">${itemName}</span>
        <span class="cart-item-quantity">1</span>
        <span class="cart-item-price">X ${itemPrice}</span>
        <button type='button' class="btn btn-danger btn-sm remove-item">Delete</button>
      </div>
    `;
    //console.log(itemHtml);
    $("#cart").append(itemHtml);


    // add listener to remove item
    $(".remove-item").on("click", function() {
      const $itemName = $(this).closest(".cart-item").find(".cart-item-name").text();
      delete cart[$itemName];
      $(this).closest(".cart-item").remove();
      functions.updateTotal();//stretch
    });
  }
};
