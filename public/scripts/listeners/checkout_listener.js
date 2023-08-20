import { functions } from '../functions/functions_index.js';

export const checkoutListener = () => {
  $(".checkout-button").on("click", function() {

  const orderDetails = functions.getOrderDetailsFromPage();
  const orderTotal = functions.orderTotal();

  // Calculate order total
  // const orderTotal = orderDetails.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);



  const orderData = {
    userId: 2,
    orderTotal: orderTotal,
    orderDetails: JSON.stringify(orderDetails) // Convert to JSON string
  };

  console.log(orderData);
  
  // $.ajax({
  //   url: '/checkout',
  //   method: "POST",
  //   data: orderData,
  //   success: function(response) {
  //     console.log("Order submitted:", response);
  //   },
  //   error: function(error) {
  //     console.error("Error submitting order:", error);
  //   }
  // });
});
}