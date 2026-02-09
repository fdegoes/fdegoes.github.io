var options = {
  valueNames: [ 'title', 'author', 'venue' ]
};

var userList = new List('publications', options);

// Update search results count
userList.on('searchComplete', function() {
  var resultsSpan = document.querySelector('.search-results');
  var count = userList.visibleItems.length;
  var total = userList.items.length;

  if (userList.searched) {
    resultsSpan.textContent = 'Showing ' + count + ' of ' + total + ' publications';
  } else {
    resultsSpan.textContent = '';
  }
});
