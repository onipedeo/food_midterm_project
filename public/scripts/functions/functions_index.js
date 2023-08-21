import { orderTotal } from './order_total.js';
import { updateTotal } from './update_total.js';
import { addItemToCart } from './add_item_to_cart.js';
import { render_menu } from './render_menu.js';
import { displayDishes } from './display_dishes.js';
import { logout } from './log_out.js';
import { getOrderDetailsFromPage } from './checkout_order.js';

export const functions = {
  orderTotal,
  updateTotal,
  addItemToCart,
  render_menu,
  displayDishes,
  logout,
  getOrderDetailsFromPage
}
