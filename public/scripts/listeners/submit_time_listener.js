export const submitTimeListener = () => {
  $(".enter-time").on("click", function (e) {
    e.preventDefault();
    const orderId = $(this).siblings(".orderID").val();
    const time = $(this).siblings(".timeInput").val();
    console.log("time", time);
    const data = { orderId, timeInput: time };
    console.log("data", data);
    $.post({
      url: "/api/estimated-time",
      method: "POST",
      data,
      success: (result) => {
        // Clear the input field
        $(this).siblings(".timeInput").val("");

        // Display success message at the top
        const successMessage = $("<div>")
          .addClass("success-message")
          .text("Estimated time submitted successfully.");
        $("body").prepend(successMessage);

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        setTimeout(function () {
          successMessage.remove(); // Remove the message after a certain time
        }, 3000); // Adjust the time (in milliseconds) as needed

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
