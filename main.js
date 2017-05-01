window.onload = function() {
  setToday();

  var query = getUrlQuery();
  var key;
  var view;
  for (key in query) {
    view = document.getElementById(key);
    if (view) {
      view.innerText = decodeURIComponent(query[key]);
    }
  }
};

var getUrlQuery = function() {
  var url, hash, queries, i, data;
  url = window.location.search;
  hash = url.slice(1).split('&');
  queries = [];
  for (i = 0; i < hash.length; i++) {
    data = hash[i].split('=');
    queries.push(data[0]);
    queries[data[0]] = data[1];
  }
  return queries;
};

var setToday = function() {
  var now = new Date();
  document.getElementById("day").innerText = "" +
      now.getFullYear() + "/" +
      (now.getMonth() + 1) + "/" +
      now.getDate();
};
