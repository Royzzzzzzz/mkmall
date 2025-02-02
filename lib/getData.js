export async function getData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: "no-store",
    });
    console.log("baseUrl", `${baseUrl}`)
    console.log("response", response)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
