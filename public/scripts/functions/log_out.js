export function logout() {
  // Clear cookie
  Cookies.remove("employeeID");
  Cookies.remove("customerID");

  // Display the customer content
  $(".customer-content").show();
  $(".employee-content").hide();
  $(".username-display").hide();
  $(".logged-out").hide();

}
