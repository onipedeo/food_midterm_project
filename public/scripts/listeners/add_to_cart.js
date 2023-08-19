import { functions } from '../functions/functions_index.js';

export const addToCartListener = () => {
  $(".add_to_order").on("click", function() {
    const $itemName = $(this)
      .closest(".menu_item")
      .find(".pizza_title")
      .text();

    let $itemPrice = $(this).closest(".menu_item").find(".price").text();
    //$itemPrice = $itemPrice.split(" ")[1];

    //console.log($(this).closest(".menu_item"));
    functions.addItemToCart($itemName, $itemPrice);
    functions.updateTotal();
    //console.log("add to order was clicked");
  });
};