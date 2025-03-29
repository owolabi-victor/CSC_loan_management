async function loginRequest(data) {
  const url = "https://866b-129-205-124-230.ngrok-free.app/api/login";

  console.log(data);

  try {
    const response = await fetch(url, {
      method: "POST", // Change to GET, PUT, DELETE if needed
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert data to JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json(); // Parse response
    console.log("Success:", result);

    console.log(result.token);

    //     // Store authentication token
    localStorage.setItem("authToken", result.token);

    alert("Sign in successful!");

    window.location.href = "dashboard.html";

    return result;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePasswordSpan = document.querySelector(".toggle-password");
  const rememberCheckbox = document.getElementById("remember");
  const loginBtn = document.querySelector(".login-btn");

  // Remove the inline onclick attribute
  //   loginBtn.removeAttribute("onclick");

  // Password visibility toggle
  togglePasswordSpan.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    togglePasswordSpan.textContent =
      passwordInput.type === "password" ? "👁️" : "👁️‍🗨️";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    loginRequest({ email: emailValue, password: passwordValue });
  });
});
