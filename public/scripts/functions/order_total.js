// total prices of items in cart
export const orderTotal = () => {
  console.log(cart);
  let total = 0;
  for (const item in cart) {

    let price = cart[item].price;
    price = price.slice(1);
    let itemTotal = Number(price) * cart[item].quantity;
    total += Number(Math.floor(itemTotal * 100) / 100);
  }
  console.log(total);
  return total;
};


