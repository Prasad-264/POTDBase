"use client";

import { useState, useEffect } from "react";
import {
  fetchLeetcodeData,
  fetchGeeksForGeeksData,
  fetchHackerEarthData,
  fetchCodingNinjasData,
} from "@/services/platformServices";

export const useFetchProblem = (platform) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let result;
        if (platform === "leetcode") {
          result = await fetchLeetcodeData();
        } else if (platform === "geeksforgeeks") {
          result = await fetchGeeksForGeeksData();
        } else if (platform === "hackerearth") {
          result = await fetchHackerEarthData();
        } else if (platform === "codingninja") {
          result = await fetchCodingNinjasData();
        }
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [platform]);

  return { data, loading, error };
};
