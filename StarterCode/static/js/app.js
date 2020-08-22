// from data.js
var tableData = data;

// select the table body 
var tbody = d3.select("tbody");

// Display the whole table as opening default
tableData.forEach((record) => {
    console.log(record);
    var row = tbody.append('tr');

    Object.entries(record).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// following are the methods to get input value, and filter by input value 
// Select the button
var button = d3.select("#filter-btn");
// Select the form
//var form = d3.select("#datetime");
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
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
  // Show filtered results only in main table
  if (matchingCase.length == 0) {
    // Check where there are 0 matches
    // console.log(`No results for date ${userInput}`);
    tbody.html("");
    tbody.text(`There are no results for the date you entered - ${userInput}`);
} 
else {
    tbody.html("");
    matchingCase.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
      // Check entries
        // console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
  });
};    
};