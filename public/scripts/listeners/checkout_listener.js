import { functions } from "../functions/functions_index.js";

export const checkoutListener = () => {
  $(".checkout-button").on("click", function () {
    const orderDetails = functions.getOrderDetailsFromPage();
    const orderTotal = functions.orderTotal();

    const orderData = {
      userId: 2,
      orderTotal: orderTotal,
      orderDetails: JSON.stringify(orderDetails), // Convert to JSON string
    };

    $.ajax({
      url: "/api/checkout/submit-order",
      method: "POST",
      data: orderData,
      success: function (response) {
        $.ajax({
          url: "/api/checkout/send-twilio-text",
          method: "POST",
          data: { orderDetails, orderTotal },
          success: function (response) {
            console.log("Twilio text sent:", response);
          },
          error: function (error) {
            console.error("Error sending Twilio text:", error);
          },
        });
      },
      error: function (error) {
        console.error("Error submitting order:", error);
      },
    });

    const formatTimeAmPm = (time24h) => {
      let splitTime = time24h.split(":");
      let hours = Number(splitTime[0]);
      let minutes = Number(splitTime[1]);

      const amPm = hours >= 12 ? "PM" : "AM";
      if (hours > 12) {
        hours -= 12;
      }
      return `${hours}:${minutes} ${amPm}`;
    };

    // Get estimated time and add to DOM
    const updateEstimatedTime = () => {
      $.get("/api/checkout/get-estimated-time", function (data) {

        const estimatedTime = data.estimated_completion;

        if (estimatedTime !== null) {

          const formattedTime = formatTimeAmPm(estimatedTime);

          $(".msg2").text(
            `Your order will be ready for pickup at ${formattedTime}`
          );
        }
      });
    };
    // Show loading animation
    $(".cart-container").empty();
    $(".cart-container").append(`<p class="msg">Submitting your order 🍕 🍕 🍕</p>`);

    // Simulate a 2-second delay using setTimeout
    setTimeout(() => {
      // Clear the cart
      $(".cart-container").empty();

      // Display success message
      $(".cart-container").append(`
      <div class="order-msg">
      <p class="msg1">Your order has been submitted successfully!</p>
      <p class="msg2">Waiting for estimated time of completion</p>
      <button class='close btn btn-warning'>Close</button>
      </div>
    `);
      let refreshEstimate = setInterval(updateEstimatedTime, 5000);

      // Attach event listener to close button
      $(".close").on("click", () => {
        // Hide the cart and revert to previous state
        $(".cart-container").empty();
        clearInterval(refreshEstimate);
      });
    }, 2000);
  });
};
