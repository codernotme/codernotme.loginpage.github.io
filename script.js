// JavaScript for login/signup page
document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var welcomeMessage = document.getElementById("welcomeMessage");

  var toggleLoginForm = function () {
    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
    } else {
      loginForm.style.display = "block";
    }
  };

  var showWelcomeMessage = function () {
    var usernameInput = document.querySelector("#loginForm input[type='text']");
    var passwordInput = document.querySelector("#loginForm input[type='password']");

    // Perform simple form validation
    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
      alert("Please fill in both username and password.");
      return;
    }

    welcomeMessage.innerHTML = "Welcome, " + usernameInput.value + "!";
    welcomeMessage.style.display = "block";

var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none"; // Hide the login form

    var loginButton = document.getElementById("loginButton");
    loginButton.style.display = "none"; // Hide the login button
  };

  // Attach event listeners
  var loginButton = document.querySelector(".button");
  loginButton.addEventListener("click", toggleLoginForm);

  var submitButton = document.querySelector("#loginForm .button");
  submitButton.addEventListener("mouseover", function () {
    submitButton.style.backgroundColor = "#3c883c";
  });
  submitButton.addEventListener("mouseout", function () {
    submitButton.style.backgroundColor = "#4CAF50";
  });
  submitButton.addEventListener("click", showWelcomeMessage);

  // Restore original button color when cursor is not over
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "#4CAF50";
    });
  });
});
