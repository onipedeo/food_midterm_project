import { orderTotalListener } from './order_total_listener.js';
import { addToCartListener } from './add_to_cart.js';
import { viewOrderListener } from './view_order_listener.js';
import { checkoutListener } from './checkout_listener.js';
import { submitTimeListener } from './submit_time_listener.js';

export const listeners = {
  orderTotalListener,
  addToCartListener,
  viewOrderListener,
  checkoutListener,
  submitTimeListener
}
