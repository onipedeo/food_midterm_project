import { functions } from './functions/functions_index.js';
import { listeners } from './listeners/listeners_index.js';


$(document).ready(function() {
  $(".login-form").hide();
  listeners.viewOrderListener();

  $(".show-login-form").click(function() {
    $(".login-form").show();
    $(".show-login-form").hide();
  });

  $.ajax({
    url: "/api/widgets",
    method: "GET",
    success: (result) => {
      functions.render_menu(result);
      listeners.addToCartListener();

    },
    error: function(err) {
      console.log("Error in Fetch Dishes Data ", err);
    },
  });

  //function to trigger when user clicks checkout button
  listeners.checkoutListener();




  console.log("loaded");











});
