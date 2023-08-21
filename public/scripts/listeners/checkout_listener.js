import { functions } from '../functions/functions_index.js';

export const checkoutListener = () => {
  $(".checkout-button").on("click", function() {

  const orderDetails = functions.getOrderDetailsFromPage();
  const orderTotal = functions.orderTotal();
  const userId = Cookies.get("customerID");

  const orderData = {
    userId: userId,
    orderTotal: orderTotal,
    orderDetails: JSON.stringify(orderDetails) // Convert to JSON string
  };

  console.log(orderData.userId);

  
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

    //empty the cart and display success msg
  $(".cart-container").empty();
  $(".cart-container").append(`<p class="msg">Your order has been submitted successfully!</p><button class='close'>Close</button>`);
  $(".close").on("click", () => {
    $(".cart-container").hide();
  });
});
}