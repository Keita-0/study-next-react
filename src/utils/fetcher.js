export const fetcher = async (url) => {
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得が発生しました。");
  }
  const json = await response.json();
  return json;
};
