const url = "https://raw.githubusercontent.com/shemani2/project_3/jenni/total_combined_datat.json"

// Read the JSON file from the URL
d3.json(url).then(function(data) {
  console.log(data);
});


function init() {
  // Dropdown Menu
  let dropdownMenu = d3.select("#selDataset");

  // Variable for sample names
  let names = data.map(entry => entry.County);

  // Add samples to dropdown menu
  names.forEach((name) => {
    dropdownMenu.append("option").text(name).property("county", name);
  });

  // Set the first sample of the list
  let samplechart = data[0];

  // Get value of the samples
  console.log(samplechart);

  // Plots 
  barchart(samplechart);
  bubblechart(samplechart);
}

// Call the init function
init();

// Bar chart 
function barchart (selectedValue) {

  // D3 to retrieve all the data
  d3.json(url).then((data) => {

      // Retrieve all samples data
      let samples = data.samples;

      // Call the custom function with filter()
      let filteredData = samples.filter((sample) => sample.id === selectedValue);

      // First index of the array
      let obj = filteredData[0];

      // Use otu_ids for the x values, sample_values for the y values, and otu_labels for text values
      let otu_ids = obj.otu_ids;
      let otu_labels = obj.otu_labels;
      let sample_values = obj.sample_values;

      // Log data to console
      console.log(otu_ids,otu_labels,sample_values);

      // Trace for bar chart
      let trace = [{
           x: sample_values.slice(0,10).reverse(),
           y: otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
           text: otu_labels.slice(0,10).reverse(),
           type: "bar",
           marker: {
                color: "#4682B4"
            },
            orientation: "h"
        }];
       
        // Use Plotly to plot bar chart
        Plotly.newPlot("bar", trace);
    });
}


// Bubble chart
function bubblechart(selectedValue) {

  // D3 to retrieve all the data
  d3.json(url).then((data) => {
      
      // Retrieve all sample data
      let samples = data.samples;

      // Call the custom function with filter()
      let filteredData = samples.filter((sample) => sample.county === selectedValue);

      // First index of the array
      let obj = filteredData[0];

      // Get the otu_ids, lables, and sample values
      let otu_ids = obj.otu_ids;
      let otu_labels = obj.otu_labels;
      let sample_values = obj.sample_values;

      // Log data to console
      console.log(otu_ids,otu_labels,sample_values);
      
      // Trace for bubble chart
      let trace1 = {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Earth"
          }
      };

      // Apply layout
      let layout = {
          xaxis: {title: "OTU ID"}
      };

      // Use Plotly to plot bubble chart
      Plotly.newPlot("bubble", [trace1], layout)
  });
};

// Updates plots when sample is changed
function optionChanged(selectedValue) { 

  // Log data to new values
  console.log(selectedValue); 

  // Plot all functions
  barchart(selectedValue);
  bubblechart(selectedValue);

};

init();