const API_URL = "https://api.artic.edu/api/v1/artworks";

async function artworks() {
  try {
    const [api1, api2, api3] = await Promise.all([
      fetch(`${API_URL}/129883`),
      fetch(`${API_URL}/129884`),
      fetch(`${API_URL}/129885`),
    ]);

    const [dataJs1, dataJs2, dataJs3] = await Promise.all([
      api1.json(),
      api2.json(),
      api3.json(),
    ]);

    const [result1, result2, result3] = [
      dataJs1.data,
      dataJs2.data,
      dataJs3.data,
    ];
    console.log(result1, result2, result3);

    return { result1, result2, result3 };
  } catch (err) {
    console.log(err.message, "error");
  }
}

async function showHtml() {
  const { result1, result2, result3 } = await artworks();

  const par1 = document.getElementById("r1");
  par1.innerText = result1.title;
  console.log(par1);

  const par2 = document.getElementById("r2");
  par2.innerText = result2.title;
  console.log(par2);

  const par3 = document.getElementById("r3");
  par3.innerText = result3.title;
  console.log(par3);
}

artworks();

showHtml();
