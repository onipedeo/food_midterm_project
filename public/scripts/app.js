$(document).ready(function(){
  // $.get('/api/widgets', (data) => {
  //   console.log("data", data);
  // });

  $.ajax({
    url: "/api/widgets",
    method: "GET",
    success: function(result){
      console.log("Dishes Data ",result);
      //Here we are getting all the data. Now we can create function to display the data in the html over here.
      for(let item of result.dish){
        let returnItem = displayDishes(item);
        $('#menu').append(returnItem);
      }
      //displayDishes(result.dish);
    },
    error: function (err){
      console.log("Error in Fetch Dishes Data ", err);
    }
  });

  function displayDishes(item){

        // let menuHtml = `` // string to concat to. will hold the resulting html.
        // // html template for menu item
        // // loop through items and add to menuHtml
        //   const price = item.price;
        //   const image_url = item.image_url;
        //   const pizza_name = item.name;
        //   const description = item.description;
        //   const isVegan = item.vegan;
          
        //   const itemHtml = `
        //   <article class="menu_item">
        //   <img class="pizza_image" src="${image_url}" alt="pizza picture">
        //     <span>
        //       <h3 class="pizza_title">${pizza_name}</h3> 
        //       <p class="pizza_description">${description}</p>
        //       <div>vegan: ${isVegan ? "yes" : "no"}</div> 
        //     </span>
        //     <div>
        //       <h6>Price: ${price}</h6>
        //     </div>
        //   </article>
        //   `; 
        //   menuHtml += itemHtml;
        //   return menuHtml;

        // string to concat to. will hold the resulting html.
        // html template for menu item
        // loop through items and add to menuHtml
          const price = item.price;
          const image_url = item.image_url;
          const pizza_name = item.name;
          const description = item.description;
          const isVegan = item.vegan;
          
          const menuHtml = `
          <article class="menu_item">
          <img class="pizza_image" src="${image_url}" alt="pizza picture">
            <span>
              <h3 class="pizza_title">${pizza_name}</h3> 
              <p class="pizza_description">${description}</p>
              <p>Vegan: ${isVegan ? "Yes" : "No"}</p> 
            </span>
            <div>
              <h6>Price: ${price}</h6>
            </div>
          </article>
          `; 
          return menuHtml;
  };
  
})