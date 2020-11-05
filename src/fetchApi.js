export const fetchApi = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return await data;
};