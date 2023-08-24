export const submitTimeListener = () => {
  $(".enter-time").on('click', function(e) {
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
        console.log("Estimated time posted successfully");
      },
      error: function(err) {
        console.log("Error posting estimated time. ", err.responseText);
      },
    });
  });
}
