import { getBaseUrl } from "../baseUrlFn.js";

export async function takeLoan(data) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/loans`;

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

    return result;
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}
