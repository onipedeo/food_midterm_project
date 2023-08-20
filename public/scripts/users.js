console.log("Document ready");

$(document).ready(function() {
  $("#login-form").submit(function(event) {
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    $.post("/api/logins", { email: email, password: password }, function(response) {
      const user = response.user;

      if (user.is_employee) {
        $(".username-display").text(`Welcome, ${user.name}. You are logged in as an employee.`);
        $(".customer-content").hide();
        $(".employee-content").show();

        // Assign the user ID to a cookie using js-cookie
        Cookies.set("employeeID", user.id);
      } else {
        $(".username-display").text(`Welcome, ${user.name}. Enjoy!`);
        $(".employee-content").hide();
        $(".customer-content").show();
      }
      // Clear the email and password input fields
      $("#email").val("");
      $("#password").val("");
    })
    .fail(function(error) {
      console.error("error occurred:", error);
    });
  });
});
