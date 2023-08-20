import { functions } from '../functions/functions_index.js';

export const checkoutListener = () => {
  $(".checkout-button").on("click", function() {

  const orderDetails = functions.getOrderDetailsFromPage();
  const orderTotal = functions.orderTotal();

  const orderData = {
    userId: 2,
    orderTotal: orderTotal,
    orderDetails: JSON.stringify(orderDetails) // Convert to JSON string
  };

  
  $.ajax({
    url: "/api/checkout/submit-order",
    method: "POST",
    data: orderData,
    success: function(response) {
      console.log("Order submitted:", response);
      
      $.ajax({
        url: "/api/checkout/send-twilio-text",
        method: "POST",
        data: {orderDetails, orderTotal},
        success: function(response) {
          console.log("Twilio text sent:", response);
        },
        error: function(error) {
          console.error("Error sending Twilio text:", error);
        }
      });
    },
    error: function(error) {
      console.error("Error submitting order:", error);
    }
  });

});
};