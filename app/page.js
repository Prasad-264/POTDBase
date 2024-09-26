"use client";
import Navbar from "@/components/Navbar";
import ProblemCard from "@/components/ProblemCard";
import { useFetchProblem } from "@/hooks/useFetchProblem";
import { useEffect, useState } from "react";
import { motivationalQuotes } from "@/utils/constants";

const Home = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    setQuote(
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    );
  }, []);

  const {
    data: leetcodeData,
    loading: leetcodeLoading,
    error: leetcodeError,
  } = useFetchProblem("leetcode");

  const {
    data: gfgData,
    loading: gfgLoading,
    error: gfgError,
  } = useFetchProblem("geeksforgeeks");

  const {
    data: hackerearthData,
    loading: hackerearthLoading,
    error: hackerearthError,
  } = useFetchProblem("hackerearth");

  const {
    data: codingninjaData,
    loading: codingninjaLoading,
    error: codingninjaError,
  } = useFetchProblem("codingninja");

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <p className="text-xl mb-8">
            Your one-stop destination for Problem of the Day from various coding
            platforms.
          </p>
          <div className="p-4 rounded-lg dark:bg-gray-800 bg-white shadow-lg max-w-7xl mx-auto">
            <p className="italic">&quot;{quote}&quot;</p>
          </div>
        </div>
        {leetcodeError && (
          <p className="text-center text-red-500">{leetcodeError}</p>
        )}
        {gfgError && <p className="text-center text-red-500">{gfgError}</p>}
        {hackerearthError && (
          <p className="text-center text-red-500">{hackerearthError}</p>
        )}
        {codingninjaError && (
          <p className="text-center text-red-500">{codingninjaError}</p>
        )}

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <ProblemCard
            platform="Leetcode"
            icon="/leetcode.svg"
            difficulty={leetcodeData?.leetcodeData?.question?.difficulty}
            title={leetcodeData?.leetcodeData?.question?.title}
            topicTags={leetcodeData?.leetcodeData?.question?.topicTags}
            accuracy={leetcodeData?.acRate}
            totalSubmissions={leetcodeData?.totalSubmission}
            link={`https://leetcode.com${leetcodeData?.leetcodeData?.link}`}
          />
          <ProblemCard
            platform="Geeksforgeeks"
            icon="/geeksforgeeks.svg"
            difficulty={gfgData?.difficulty}
            title={gfgData?.problem_name}
            accuracy={gfgData?.accuracy}
            totalSubmissions={gfgData?.total_submissions}
            link={gfgData?.problem_url}
          />
          <ProblemCard
            platform="Hackerearth"
            icon="/hackerearth.svg"
            difficulty={hackerearthData?.difficulty || "Medium"}
            title={hackerearthData?.title}
            accuracy={hackerearthData?.success_rate}
            totalSubmissions={hackerearthData?.attempted_count}
            link={`https://www.hackerearth.com${hackerearthData?.url}`}
          />
          <ProblemCard
            platform="CodingNinja"
            icon="/codingninjas.svg"
            difficulty={codingninjaData?.data?.details?.EASY?.problem?.difficulty}
            title={codingninjaData?.data?.details?.EASY?.problem?.name}
            accuracy={0}
            totalSubmissions={codingninjaData?.data?.details?.EASY?.problem?.submission_count}
            link={"https://www.naukri.com/code360/problem-of-the-day/easy"}
          />
          <ProblemCard
            platform="CodingNinja"
            icon="/codingninjas.svg"
            difficulty={"Medium"}
            title={codingninjaData?.data?.details?.MODERATE?.problem?.name}
            accuracy={0}
            totalSubmissions={codingninjaData?.data?.details?.MODERATE?.problem?.submission_count}
            link={"https://www.naukri.com/code360/problem-of-the-day/moderate"}
          />
          <ProblemCard
            platform="CodingNinja"
            icon="/codingninjas.svg"
            difficulty={codingninjaData?.data?.details?.HARD?.problem?.difficulty}
            title={codingninjaData?.data?.details?.HARD?.problem?.name}
            accuracy={0}
            totalSubmissions={codingninjaData?.data?.details?.HARD?.problem?.submission_count}
            link={"https://www.naukri.com/code360/problem-of-the-day/hard"}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
