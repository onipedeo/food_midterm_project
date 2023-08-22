



export const loadOrder = function(res) {
  // string to concat to. will hold the resulting html.
  let ordersHtml = ``;
  // html template for menu item
  // loop through items and add to menuHtml
  const data = res.order;
  const orders = {};

  for (const item in data) {

    const orderId = data[item].orderid;
    if (orders[orderId]) {
      const dish = {
        name: '',
        qty: 0
      };
      dish.name = data[item].dishname;
      dish.qty = data[item].quantity;
      orders[orderId].dishes.push(dish)
    } else {
      orders[orderId] = {
        dishes: [],
        total: 0,
        username: data[item].username
      };
      const total = data[item].total / 100;

      const dish = {
        name: '',
        qty: 0
      };
      dish.name = data[item].dishname;
      dish.qty = data[item].quantity;
      orders[orderId].dishes.push(dish);

      orders[orderId].total = total;

    }
  }

  for (const order in orders) {
    let orderHtml = `
    <article class="order">
    <div class="order-username">${orders[order].username}</div>
      <ul class="order-items">
      `;
    for (const item in orders[order].dishes) {

      const name = orders[order].dishes[item].name;
      const quantity = orders[order].dishes[item].qty;

      const string = `<li>${name}, quantity: ${quantity}</li>`;
      orderHtml += string;

    }
    const closingHtml = `
    </ul>
    <div class="order-total>Total: $${orders[order].total}</div>
    </article>
    `
    orderHtml += closingHtml;
    ordersHtml += orderHtml;

  }

  //return ordersHtml;
  $(".orders-container-employee").append(orders);
}

// export const render_orders = function(result) {
//   //Here we are getting all the data. Now we can create function to display the data in the html over here.
//   for (let item of result.dish) {
//     let returnItem = loadOrder(item);
//     $(".orders-container-employee").append(returnItem);
//   }
// };