export const viewOrderListener = () => {
  $(".view-order").click(function() {
    $("#cart-container").toggle();
  });
}