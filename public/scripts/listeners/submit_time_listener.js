export const submitTimeListener = () => {
  $(".enter-time").on("click", function (e) {
    e.preventDefault();
    const orderId = $(this).siblings(".orderID").val();
    const time = $(this).siblings(".timeInput").val();
    const data = { orderId, timeInput: time };
    $.post({
      url: "/api/estimated-time",
      method: "POST",
      data,
      success: (result) => {
        // Clear the estimated time
        $(this).siblings(".timeInput").val("");

        // Display success message at the top
        const successMessage = $("<div>")
          .addClass("success-message")
          .text("Estimated time submitted successfully.");
        $("body").prepend(successMessage);

        // Automatically scroll to the top of the page after clicking enter button
        window.scrollTo(0, 0);

        setTimeout(function () {
          successMessage.remove(); // Remove the message after 3 seconds
        }, 3000);

        $.ajax({
          url: "/api/estimated-time/send-twilio-estimated-time-text",
          method: "POST",
          data: { time },
          success: function (response) {
            console.log("Twilio text sent:", response);
          },
          error: function (error) {
            console.error("Error sending Twilio text:", error);
          },
        });
      },
      error: function (err) {
        console.log("Error posting estimated time. ", err.responseText);
      },
    });
  });
};
