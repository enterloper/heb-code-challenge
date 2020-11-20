/**
 * Returns fetched json from the provided API url
 *
 * @param {string} url location of api
 * @return {json} JSON object containing fetched data
 */

const fetchData = async (url = "") => {
  const response = await fetch(url);
  return response.json();
};

export default fetchData;
