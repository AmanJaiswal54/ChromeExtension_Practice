const search = document.querySelector('.js-form');

search.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('.inputValue').value;
  if (encodeURIComponent(value) != '') {
    window.location.href = `https://rsrc-withus.com/results.aspx?gd=RD1003639&searchsource=69&n=1000&q=${encodeURIComponent(value)}`;
  } else return false;
});
