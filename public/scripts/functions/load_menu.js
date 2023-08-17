//const getMenu = require('./db/queries/menu.js')

// function uses d
/**
 * @params {none} 
 * 
 * @results handles the data from getMenu query.
*/
const loadMenu = function(res) {
  // string to concat to. will hold the resulting html.
    let menuHtml = ``;
    // html template for menu item
    // loop through items and add to menuHtml
    for (const item of res) {
      const price = item.price;
      const image_url = item.image_url;
      const pizza_name = item.name;
      const description = item.description;
      const isVegan = item.vegan;
      
      const itemHtml = `
      <article class="menu_item">
      <img class="pizza_image" src="${image_url}" alt="pizza picture">
        <span>
          <h3 class="pizza_title">${pizza_name}</h3> 
          <p class="pizza_description">${description}</p>
          <div>vegan: ${isVegan ? "yes" : "no"}</div> 
        </span>
        <div>
          <h4>${price}</h4>
        </div>
      </article>
      `; 
      menuHtml += itemHtml;
    }
    return menuHtml;
  }


module.exports( loadMenu )