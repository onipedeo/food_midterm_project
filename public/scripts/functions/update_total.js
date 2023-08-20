import { functions } from './functions_index.js';

export const updateTotal = () => {
  const total = '$' + functions.orderTotal();
  $('#cart-total').text(total);

};