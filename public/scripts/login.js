
import { functions } from './functions/functions_index.js';

$(document).ready(function() {

  $("#login-form").submit(function(event) {
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();


    $.post("/api/logins", { email: email, password: password }, function(response) {
      const user = response.user;

      if(!user){
        alert('Invalid email or password.')
        return
      }

      if (user.is_employee) {
        $(".username-display").text(`Welcome, ${user.name}. You are logged in as an employee.`);
        $(".login-form").hide();
        $(".customer-content").hide();
        $(".employee-content").show();
        $(".logged-in").show();

        // Assign the user ID to a cookie using js-cookie
        Cookies.set("employeeID", user.id);

      } else {
        $(".username-display").text(`Welcome, ${user.name}. Enjoy Your 🍕!`);
        $(".login-form").hide();
        $(".employee-content").hide();
        $(".customer-content").show();
        $(".logged-in").show();

        Cookies.set("customerID", user.id);

      }
      // Clear the email and password input fields
      $("#email").val("");
      $("#password").val("");
    })
    .fail(function(error) {
      console.error("error occurred:", error);
    });
  });

  $("#logout-button").click(function() {
    functions.logout();
  });

});


