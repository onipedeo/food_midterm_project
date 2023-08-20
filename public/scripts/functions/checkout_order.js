//at the click of check out, if order.id, 
//insert into orders table, user_id, orders_total
//insert into orders_dishes quantity, orders.id, dish.id
//clear the order details and display order completed


//send a text to the restaurant with the order details

// const orderDetails = [];
// $(".cart-item").each(function () {
//   const itemName = $(this).find(".cart-item-name").text();
//   const quantity = parseInt($(this).find(".cart-item-quantity").text());
//   orderDetails.push({ itemName, quantity });
// });

export const getOrderDetailsFromPage = () => {
  const orderDetails = [];
  $(".cart-item").each(function() {
    const itemName = $(this).find(".cart-item-name").text();
    const quantity = parseInt($(this).find(".cart-item-quantity").text());
    let price = $(this).find(".cart-item-price").text();
  
      //format price to number
      price = Number(
        price
          .split(" ")
          .filter((x) => x !== "")[3]
          .slice(1)
      );

    orderDetails.push({ itemName, quantity, price });
  });
  return orderDetails;
};


