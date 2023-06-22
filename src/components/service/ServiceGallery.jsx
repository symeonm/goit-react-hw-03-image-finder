function FetchImage(searchValue) {
  return fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=1&key=36038958-32844999b4809bb8b9f23e519&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(new Error('no image'))
  });
}

const api = { FetchImage };

export default api;
