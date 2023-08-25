import { functions } from './functions/functions_index.js';
import { loadOrder, render_orders } from './functions/render_orders.js';
import { listeners } from './listeners/listeners_index.js';

$(document).ready(function() {
  // Function to load and render orders - employee side
  function loadAndRenderOrders() {
    $.ajax({
      url: "/api/orders",
      method: "GET",
      success: (result) => {
        const ordersHtml = loadOrder(result);
        render_orders(ordersHtml);
        listeners.submitTimeListener();
      },
      error: function(err) {
        console.log("Error in Fetch Orders Data ", err);
      },
    });
  }

  //login setup
  $(".login-form").hide();
  $(".employee-content").hide();
  listeners.viewOrderListener();

  $(".show-login-form").click(function() {
    $(".login-form").show();
    $(".show-login-form").hide();
  });

  //customer side
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

  // Function for "Check New Order" button
  function refreshButton() {
    $('#refreshButton').on('click', function() {
    $('#orders-container-employee').empty();
      loadAndRenderOrders();
    });
  }

  // Initial load of orders
  loadAndRenderOrders();
  // call loadAndRenderOrders() again when click "Check New Order" button
  refreshButton();


  listeners.checkoutListener();

  console.log("loaded");
});
