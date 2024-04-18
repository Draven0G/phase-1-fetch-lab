function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
}

function fetchBooks() {
  // Send a fetch request to 'https://anapioficeandfire.com/api/books'
  fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json()) // Parse the JSON response
      .then(books => renderBooks(books)) // Pass the JSON object to renderBooks()
      .catch(error => console.error('Error fetching books:', error));
}
