// Making an AJAX GET request using jQuery
$.ajax({
  // Specify the URL to send the GET request to
  url: "https://swapi-api.hbtn.io/api/films/?format=json",

  // Set the HTTP request method to GET
  method: "GET",

  // Specify the expected data type of the response (JSON in this case)
  dataType: "json",

  // Define a callback function to execute when the request is successful
  success: function (data) {
    // When successful request, callback function is executed

    // Loop through the 'results' array in the response data
    for (const i of data.results) {
      // For each movie in the 'results' array, create a HTML list item ('li') element
      // and set its content to the movie title using 'i.title'

      // Append the created list item to the HTML element with the ID "list_movies"
      $("#list_movies").append("<li>" + i.title + "</li>");
    }
  },
});
