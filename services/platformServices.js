
export const fetchLeetcodeData = async () => {
  const res = await fetch("/api/leetcode");
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
};

export const fetchGeeksForGeeksData = async () => {
  const res = await fetch("/api/geeksforgeeks");
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
};

export const fetchHackerEarthData = async () => {
  const res = await fetch("api/hackerearth");
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
};

export const fetchCodingNinjasData = async () => {
  const res = await fetch("api/codingninja");
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
};