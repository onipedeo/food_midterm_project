import { functions } from '../functions/functions_index.js';

export const addToCartListener = () => {
  $(".add_to_order").on("click", function() {
    const $itemName = $(this)
      .closest(".menu_item")
      .find(".pizza_title")
      .text();

    let $itemPrice = $(this).closest(".menu_item").find(".price").text();
    let $dishId = $(this).closest(".menu_item").find(".dish_id").val();
    // console.log("dish id", $dishId);

    //$itemPrice = $itemPrice.split(" ")[1];

    //console.log($(this).closest(".menu_item"));
    functions.addItemToCart($itemName, $itemPrice, $dishId);
    functions.updateTotal();
    //console.log("add to order was clicked");
  });
};