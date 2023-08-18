$(document).ready(function () {
  console.log("loaded")
  // create local cart object
  const cart = {};

  const addToCartListener = () => {
    $(".add_to_order").on("click", function () {
      const $itemName = $(this)
      .closest(".menu_item")
      .find(".pizza_title")
      .text();
      
      let $itemPrice = $(this)
      .closest(".menu_item")
      .find(".price").
      text()
      //$itemPrice = $itemPrice.split(" ")[1];
      
      console.log($(this).closest(".menu_item"));
      addItemToCart($itemName, $itemPrice);
      console.log('add to order was clicked');
    })
  };

  const render_menu = function (result) {
    //Here we are getting all the data. Now we can create function to display the data in the html over here.
    for (let item of result.dish) {
      let returnItem = displayDishes(item);
      $("#menu").append(returnItem);
      
    };
  };
  $.ajax({
    url: "/api/widgets",
    method: "GET",
    success: (result) => {
      render_menu(result);
      addToCartListener();
    },
    error: function (err) {
      console.log("Error in Fetch Dishes Data ", err);
    },
  });

  function displayDishes(item) {
    const price = item.price;
    const image_url = item.image_url;
    const pizza_name = item.name;
    const description = item.description;
    const isVegan = item.vegan;

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
          </div>
            <button class="btn btn-warning btn-lg add_to_order">Add to Order</button>
          </article>
          `;
    return menuHtml;
  }

  const addItemToCart = (itemName, itemPrice) => {
      console.log(itemName, itemPrice);
      const item = {
      name: itemName,
      price: itemPrice,
      quantity: 0
    };
    /*if (cart[itemName]) {
      cart[itemName].quantity += 1;
      $(itemName)
        .find(".cart-item-quantity")
        .text(cart[itemName].quantity);
      $(itemName)
        .find(".cart-item-price")
        .text(`$${item.price * cart[itemName].quantity}`);
    } else { */
      cart[itemName] = item;
      cart[itemName].quantity = 1;
      itemHtml = `
  <div class="cart-item" id=${itemName}>
    <span class="cart-item-name">${itemName}</span>
    <span class="cart-item-quantity">${item.quantity}<span>
    <span class="cart-item-price">${itemPrice}</span>
  </div>
  `;
      console.log(itemHtml);
      $("#cart").append(itemHtml);
   // }
  };

  

});
