var options = {
  valueNames: [ 'title', 'author', 'venue' ]
};

var userList = new List('publications', options);

// Get references to search input and clear button
var searchInput = document.querySelector('.search');
var clearButton = document.querySelector('.search-clear');

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

  // Show/hide clear button based on search input
  toggleClearButton();
});

// Show/hide clear button based on input value
function toggleClearButton() {
  if (searchInput.value.length > 0) {
    clearButton.classList.add('visible');
  } else {
    clearButton.classList.remove('visible');
  }
}

// Handle clear button click
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  userList.search();
  searchInput.focus();
});

// Monitor input changes to show/hide clear button
searchInput.addEventListener('input', toggleClearButton);

// Initial check on page load
toggleClearButton();
