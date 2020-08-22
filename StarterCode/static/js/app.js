// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#datetime");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var userInput = inputElement.property("value");  
  
  //checking userInput, it worked, so pass to next step
  //console.log(userInput);

  // Use the form input to filter the data by date
  var matchingCase = tableData.filter(record => record.datetime == userInput);
  
  //checking search records, worked, pass to next step
  //console.log(matchingCase); 




};