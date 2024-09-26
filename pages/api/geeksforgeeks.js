const handler = async (req, res) => {
  try {
    const geeksforgeeksEndpoint = "https://practiceapi.geeksforgeeks.org/api/vr/problems-of-day/problem/today/";
    const response = await fetch(geeksforgeeksEndpoint);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors
          ? data.errors[0].message
          : "Failed to fetch Geeksforgeeks data"
      );
    }

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch Geeksforgeeks problem. Please try again later." });
  }
};
export default handler;
