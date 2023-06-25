export default function FetchImage(searchValue, page) {
  
  return fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=36038958-32844999b4809bb8b9f23e519&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

  });
}