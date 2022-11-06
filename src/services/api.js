const BASE_URL = 'https://cados.up.railway.app/advocates/';

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getAdvocate(username) {
  const data = await getData(`${BASE_URL}${username}`);
  return data.advocate;
}

async function getAdvocatesByPage(page = 1) {
  const data = await getData(`${BASE_URL}?page=${page}`);
  return data;
}

async function getAllAdvocates() {
  const data = await getData(`${BASE_URL}?limit=2500`);
  return data.advocates;
}

export const API = {
  getAdvocate,
  getAdvocatesByPage,
  getAllAdvocates
};