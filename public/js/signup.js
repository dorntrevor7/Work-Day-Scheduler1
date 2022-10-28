const signupFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const password1 = document.querySelector("#password1-signup").value.trim();
  const password2 = document.querySelector("#password2-signup").value.trim();

  if (password1 === password2) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
