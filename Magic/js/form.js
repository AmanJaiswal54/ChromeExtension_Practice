const search = document.querySelector('.js-form');

search.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('.inputValue').value;
  console.log('encodeURIComponent(value)', encodeURIComponent(value));
  if (encodeURIComponent(value) != '') {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(value)}`;
  } else return false;
});
