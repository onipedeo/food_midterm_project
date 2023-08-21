
export const displayOrders = function(item) {
  const orderId = 
  const dishId =
  const quantity = 
  

  const orderHtml = `
        <article class="">
        <div class="pizza_text">
          <span>
            <h3 class="pizza_title">${pizza_name}</h3>
            <p class="pizza_description">${description}</p>
            <p>Vegan: ${isVegan ? "Yes" : "No"}</p>
          </span>
          <div class="price">
            Price: ${price}
          </div>
        </div>
          <button class="btn btn-warning btn-lg add_to_order">Add to Order</button>
        </article>
        `;
  return menuHtml;
};


