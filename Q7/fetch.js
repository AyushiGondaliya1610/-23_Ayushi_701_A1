const fetch = require('node-fetch'); // For node-fetch v2

// Use async-await to fetch data
async function fetchGooglePage() {
  try {
    const response = await fetch("https://www.google.com", {
      headers: {
        // Set a browser-like user-agent to avoid blocking
        "User-Agent": "Mozilla/5.0"
      }
    });

    const html = await response.text(); // Get HTML text

    console.log("Fetched Google Page HTML:");
    console.log(html.substring(0, 500)); // Print first 500 characters
  } catch (error) {
    console.error("Failed to fetch Google page:", error.message);
  }
}

fetchGooglePage();
