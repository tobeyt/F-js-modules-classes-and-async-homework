export const getPoetry = async () => {
  const URL = "https://v1.jinrishici.com/all.json";
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return [jsonData.origin, jsonData.author, jsonData.content];
  } catch (error) {
    console.log(error);
  }
};

export const getPoetry1 = () => {
  const URL = "https://v1.jinrishici.com/all.json";
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => [jsonData.origin, jsonData.author, jsonData.content])
    .catch((error) => console.log(error));
};
