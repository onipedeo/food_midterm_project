import { functions } from './functions_index.js';

export const addItemToCart = (itemName, itemPrice) => {
  const htmlId = itemName.replace(/\s/g, "-");
  itemPrice = itemPrice.split(" ").filter((x) => x !== "")[2];
  //console.log(itemPrice);
  //console.log(htmlId);
  //console.log(itemName, itemPrice);
  const item = {
    name: itemName,
    price: itemPrice,
  };
  if (cart[itemName]) {
    cart[itemName].quantity += 1;
    $("#cart")
      .find("#" + htmlId)
      .children(".cart-item-quantity")
      .text(cart[itemName].quantity);
  } else {
    cart[itemName] = item;
    cart[itemName].quantity = 1;
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