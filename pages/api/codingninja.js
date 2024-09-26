const handler = async (req, res) => {
  try {
    const currentDate = new Date().toISOString().split("T")[0];
    const codingninjaEndpoint = `https://www.naukri.com/code360/api/v3/public_section/potd/problem_list?date=${currentDate}&phase_two=true&request_differentiator=1727158671970&naukri_request=true`;
    const response = await fetch(codingninjaEndpoint);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors
          ? data.errors[0].message
          : "Failed to fetch Codingninja data"
      );
    }

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch Codingninja problems. Please try again later." });
  }
};

export default handler;
