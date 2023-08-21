
export const displayDishes = function(item) {
  const price = item.price;
  const image_url = item.image_url;
  const pizza_name = item.name;
  const description = item.description;
  const isVegan = item.vegan;
  const dishId = item.id;

  const menuHtml = `
        <article class="menu_item container">
        <img class="pizza_image" src="${image_url}" alt="pizza picture">
        <div class="pizza_text">
          <span>
            <h3 class="pizza_title">${pizza_name}</h3>
            <p class="pizza_description">${description}</p>
            <p>Vegan: ${isVegan ? "Yes" : "No"}</p>
          </span>
          <div class="price">
            Price: ${price}
          </div>
          <input type="hidden" value="${dishId}" class="dish_id">

        </div>
          <button class="btn btn-warning btn-lg add_to_order">Add to Order</button>
        </article>
        `;
  return menuHtml;
};