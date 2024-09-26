const handler = async (req, res) => {
  try {
    const hackerearthEndpoint =
      "https://www.hackerearth.com/practice/api/practice-problem-day/";
    const response = await fetch(hackerearthEndpoint);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors
          ? data.errors[0].message
          : "Failed to fetch Hackerearth data"
      );
    }

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch Hackerearth problem. Please try again later." });
  }
};
export default handler;
