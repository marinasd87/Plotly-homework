// Use D3 to read in samples.json
d3.json("data/samples.json").then((data) => {
    
    console.log(data);

/// Create an array of otu IDs values

// Create an array of out IDs labels

var id = data.names;


// Display the default plot
function init() {
    var trace1 = {
      x:
      y:
      text:
      type: "bar",
      orientation: "h"
    };
  //data
  var barData = [trace1]
  //layout
    var layout = {
      margin: {
          l:75,
          r:75,
          t:75,
          b:50
      }
    };
  
    Plotly.newPlot("bar", barData, layout);
  
  
  // On change to the DOM, call getData()
  d3.selectAll("#selDataset").on("change", getData);
  
  // Function called by DOM changes
  function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    var data = [];
  
    for (var i = 0; i < data.names.length; i++) {
        if (dataset === data.names[i]) {
    // Call function to update the chart
    updatePlotly(data);
  }
  
  // Update the restyled plot's values
  function updatePlotly(newdata) {
    Plotly.restyle("bar", "values", [newdata]);
  }
  
  init();
  

});