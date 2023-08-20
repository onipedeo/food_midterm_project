import { functions } from './functions/functions_index.js';
import { listeners } from './listeners/listeners_index.js';


$(document).ready(function() {

  listeners.viewOrderListener();

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
