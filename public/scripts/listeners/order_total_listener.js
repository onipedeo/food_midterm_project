import { functions } from '../functions/functions_index.js'
import { listeners } from "./listeners_index.js";

export const orderTotalListener = () => {
  ('#checkout').on("click", function() {
    $.ajax({
      url: "/api/orders",
      method: "POST",
      success: (result) => {
        functions.render_menu(result);
        listeners.addToCartListener();
      },
      error: function(err) {
        console.log("Error in Fetch Dishes Data ", err);
      },
    });
  });
};