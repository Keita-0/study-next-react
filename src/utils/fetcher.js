export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得が発生しました。");
  }
  const json = await response.json();
  return json;
};
