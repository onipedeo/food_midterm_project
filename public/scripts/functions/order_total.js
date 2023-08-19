// total prices of items in cart
export const orderTotal = () => {
  let total = 0;
  const $cart = $("#cart")

  $cart.children().each(function() {
    let price = $(this).children(".cart-item-price").text();
    price = Number(price.slice(3));
    let quantity = $(this).children(".cart-item-quantity").text();
    let itemTotal = (price) * Number(quantity);
    total += Number(Math.floor(itemTotal * 100) / 100);
  });
  console.log(total);

  return total;
};


