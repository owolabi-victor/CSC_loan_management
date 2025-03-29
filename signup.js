async function sendRequest(data) {
  const baseUrl = "https://0164-102-89-23-128.ngrok-free.app";
  const url = `${baseUrl}/api/register`;

  try {
    const response = await fetch(url, {
      method: "POST", // Change to GET, PUT, DELETE if needed
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(data), // Convert data to JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json(); // Parse response
    console.log("Success:", result);
    window.location.href = "index.html";

    return result;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const showPasswordToggles = document.querySelectorAll(".toggle-password");
  const termsCheckbox = document.getElementById("terms");

  // Password visibility toggles
  showPasswordToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
      const input = index === 0 ? passwordInput : confirmPasswordInput;
      input.type = input.type === "password" ? "text" : "password";
      toggle.textContent = input.type === "password" ? "👁️" : "👁️‍🗨️";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const name = fullName.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const termsAgreed = termsCheckbox.checked;

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsAgreed) {
      alert("Please agree to the Terms & Conditions");
      return;
    }

    // Store user in local storage (mock backend)
    // const userCredentials = {
    //   email,
    //   password,
    // };

    // localStorage.setItem("user", JSON.stringify(userCredentials));

    // const requestData = { name: "John Doe", email: "john@example.com" };

    sendRequest({ email, password, name });

    // alert("Sign up successful!");

    // Redirect to login page
    // window.location.href = "index.html";
  });
});
