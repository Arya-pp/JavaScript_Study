function debounce(func, ms) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

let debouncedSearch = debounce(searchQuery, 1000);

debouncedSearch("h");
setTimeout(() => debouncedSearch("he"), 200);
setTimeout(() => debouncedSearch("hel"), 400);
setTimeout(() => debouncedSearch("hell"), 600);
setTimeout(() => debouncedSearch("hello"), 800);


