// Making an AJAX GET request using jQuery
$.ajax({
  // Specify the URL to send the GET request to
  url: "https://swapi-api.alx-tools.com/api/people/5/?format=json",

  // Set the HTTP request method to retrieve data
  method: "GET",

  // Specify the expected data type of the response
  dataType: "json",

  // Define a callback function to execute when the request is successful
  success: (data) => {
    // Extract the character's name from the response data
    const characterName = data.name;

    // Update the content of the HTML with the character's name
    $("DIV#character").text(characterName);
  },
});
