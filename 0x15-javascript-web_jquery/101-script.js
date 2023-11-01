// Wait for the document to be fully loaded
$(document).ready(function () {
  // Add item to the list
  $("DIV#add_item").click(() => {
    $("UL.my_list").append("<li>Item</li>");
  });
  // Remove the last item
  $("DIV#remove_item").click(() => {
    $("UL.my_list li:last-child").remove();
  });
  // Clear the entire list
  $("DIV#clear_list").click(() => {
    $("UL.my_list").empty();
  });
});
