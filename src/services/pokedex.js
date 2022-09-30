export const search = async (searchObj) => {
  const Q = Array.from(Object.entries(searchObj))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  const res = await fetch(process.env.POKEDEX_URL + '?' + Q);
  if (res.status >= 400) {
    throw res;
  } else {
    const body = await res.json();
    console.log(body);
    return body;
  }
};
