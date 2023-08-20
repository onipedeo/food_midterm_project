/* GLOBAL $ */
import { functions } from './functions_index.js';

export const render_menu = function(result) {
  //Here we are getting all the data. Now we can create function to display the data in the html over here.
  for (let item of result.dish) {
    let returnItem = functions.displayDishes(item);
    $("#menu").append(returnItem);
  }
};



