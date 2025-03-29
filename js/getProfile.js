export async function getProfile() {
  const url = "https://0164-102-89-23-128.ngrok-free.app/api/profile";

  const token = localStorage.getItem("authToken");

  console.log(token);

  try {
    const response = await fetch(url, {
      method: "GET", // Change to GET, PUT, DELETE if needed
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`, // Add Bearer Token
      },
      // body: JSON.stringify(data), // Convert data to JSON
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json(); // Parse response
    console.log("Success:", result);

    return result;
  } catch (error) {
    // console.log("Request failed:", error);
    return null;
  }
}
