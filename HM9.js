const API_URL = "https://api.artic.edu/api/v1/artworks";

async function artworks() {
  try {
    const [api1, api2, api3] = await Promise.all([
      fetch(`${API_URL}/129883`),
      fetch(`${API_URL}/129884`),
      fetch(`${API_URL}/129885`),
    ]);

    console.log(api1, api2, api3);
    const API_URL = await Promise.all([]);
  } catch (err) {
    console.log(err.message, "error");
  }
}
