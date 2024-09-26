const handler = async (req, res) => {
  try {
    const leetcodeEndpoint = "https://leetcode.com/graphql";
    const query = `
      query getDailyProblem {
				activeDailyCodingChallengeQuestion {
					date
					link
					question {
						questionId
						questionFrontendId
						title
						titleSlug
						difficulty
						likes
						dislikes
						isLiked
						topicTags {
								name
								slug
						}
						stats
					}
				}
			}`;

    const response = await fetch(leetcodeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors ? data.errors[0].message : "Failed to fetch LeetCode data"
      );
    }

    let parsedStats = null;
    if (data?.data?.activeDailyCodingChallengeQuestion?.question?.stats) {
      parsedStats = JSON.parse(
        data?.data?.activeDailyCodingChallengeQuestion?.question?.stats
      );
    }
    const totalSubmission = parsedStats?.totalSubmission || "N/A";
    const acRate = parsedStats?.acRate || "N/A";

    return res
      .status(200)
      .json({
        leetcodeData: data?.data?.activeDailyCodingChallengeQuestion,
        totalSubmission,
        acRate,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch Leetcode problem. Please try again later." });
  }
};
export default handler;
