// total prices of items in cart
export const orderTotal = () => {
  let total = 0;
  const $cart = $("#cart");

  $cart.children().each(function () {
    let price = $(this).children(".cart-item-price").text();

    //format price to number
    price = Number(
      price
        .split(" ")
        .filter((x) => x !== "")[3]
        .slice(1)
    );

    let quantity = $(this).children(".cart-item-quantity").text();

    let itemTotal = price * Number(quantity);

    total += Math.floor(itemTotal * 100) / 100;
  });

  return total;
};
