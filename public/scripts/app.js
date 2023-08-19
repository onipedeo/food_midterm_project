import { functions } from './functions/functions_index.js';
import { listeners } from './listeners/listeners_index.js';



import { viewOrderListener } from './listeners/view_order_listener.js'
$(document).ready(function() {

  listeners.viewOrderListener();


  // create local cart object
  const cart = {};


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


  console.log("loaded");











});
