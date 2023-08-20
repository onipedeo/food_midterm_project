//function to get order details from the cart
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


