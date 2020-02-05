// from data.js
var tableData = data;

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredData);
  
  d3.select("tbody")
  .selectAll("tr")
  .data(filteredData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });


});
  // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// });