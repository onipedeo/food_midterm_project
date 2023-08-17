/* GLOBAL $ */
const loadMenu = require('./load_menu');

const renderMenu = function() {
  const menu = loadMenu();
  $('#menu').append(menu);
};

