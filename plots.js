const url = "https://raw.githubusercontent.com/shemani2/project_3/jenni/total_combined_datat.json"

// Read the JSON file from the URL
d3.json(url).then(function(data) {
  console.log(data);
});


function init() {
  d3.json(url).then((data) => {

      // Dropdown Menu
      let dropdownMenu = d3.select("#selDataset");

      // Variable for sample names
      let county = data.county;

      // Add samples to dropdown menu
      county.forEach((name) => {
          dropdownMenu.append("option").text(name).property("county", name);

      });

      // Set the first sample of the list
      let samplechart = county[0];

      // Get value of the samples
      console.log(samplechart)

      // Plots 
      barchart(samplechart);
      bubblechart(samplechart);
  });
};

// Metadata for demographics
function demographics(selectedCounty) {

  // D3 to retrieve all the data
  d3.json(url).then((data) => {

      // Retrieve all metadata
      let metadata = data.metadata;

      // Call the custom function with filter()
      let filteredData = metadata.filter((meta) => meta.County == selectedCounty);

      // Log the data to console
      console.log(filteredData)

      // First index of the array
      let obj = filteredData[0];

      // Clear metadata content to make it ready for user input
      d3.select("#sample-metadata").html("");

      // Call Object.enteries() 
      Object.entries(obj).forEach(([key,county]) => {

          // Log data to console
          console.log(key,county);

          // Key/Value pair to append 
          d3.select("#sample-metadata").append("h5").text(`${key}: ${county}`);
      });
  });

}

// Bar chart 

function barchart(selectedCounty) {
  // D3 to retrieve all the data
  d3.json(url)
    .then((data) => {
      
      // Filter data for the selected county
      if (!Array.isArray(data)) {
        data = Object.values(data);
      }

      function selectData(county){
        return county.Year == 2023; 
      }
      let countyyear = data.filter(selectData)
      console.log(countyyear)
      console.log("this is selected county", selectedCounty)
      console.log("this is data", data)
      console.log(data.JSON.filter(({county}) => county === 'Anderson County'));
      let filteredData = data.filter((entry) => entry.County === selectedCounty);

      // Check if data is available for the selected county
      if (filteredData.length === 0) {
        console.log("No data available for the selected county.");
        return;
      }
      const newDataObject = {
        county: dataEntry.County,
        totalNewCases: dataEntry["Total New Cases"],
        month: dataEntry.Month,
        year: dataEntry.Year,
        totalVaccinations: dataEntry["Total Vaccinations"]
      };
    
      console.log(newDataObject);
      // Extract relevant data from the first entry (assuming only one entry per county)
      

      // Log data to console
      console.log(county, totalVaccinations, year);

      // Create a Plotly trace for the bar chart
      let trace = [{
        x: ["Total Vaccinations"],
        y: [totalVaccinations],
        type: "bar",
        marker: {
          color: "#4682B4"
        }
      }];

      // Define layout for the bar chart
      let layout = {
        title: `Total Vaccinations for ${county} (${year})`,
        xaxis: { title: "Category" },
        yaxis: { title: "Total New Cases" }
      };

      // Use Plotly to plot the bar chart
      Plotly.newPlot("bar", trace, layout);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}


// Bubble chart


function bubblechart(selectedCounty) {
  // D3 to retrieve all the data
  d3.json(url).then((data) => {
      // Check if data is an array
      if (!Array.isArray(data)) {
          data = Object.values(data);
      }

      // Filter data for the selected county
      let filteredData = data.filter((entry) => entry.County === selectedCounty);

      // Check if filteredData has elements
      if (filteredData.length === 0) {
          console.log("No data available for the selected county.");
          return;
      }

      // Extract data from the first entry
      let obj = filteredData[0];

      // Check if obj is defined before accessing properties
      if (!obj) {
          console.log("Data object is undefined.");
          return;
      }

      // Create newDataObject with correct variable names
      const newDataObject = {
          county: obj.County,
          totalNewCases: obj["Total New Cases"],
          month: obj.Month,
          year: obj.Year,
          totalVaccinations: obj["Total Vaccinations"]
      };

      // Log data to console
      console.log(newDataObject.county, newDataObject.totalNewCases, newDataObject.year);

      // Trace for bubble chart
      let trace1 = {
          x: [newDataObject.totalNewCases],
          y: [newDataObject.year],
          text: [newDataObject.county],
          mode: "markers",
          marker: {
              size: newDataObject.totalNewCases,
              color: newDataObject.totalNewCases,
              colorscale: "Earth"
          }
      };

      // Apply layout
      let layout = {
          xaxis: { title: "Total New Cases" }
      };

      // Use Plotly to plot bubble chart
      Plotly.newPlot("bubble", [trace1], layout);
  }).catch((error) => {
      console.error("Error fetching data:", error);
  });
}

// Updates plots when sample is changed
function optionChanged(selectedCounty) { 

  // Log data to new values
  console.log(selectedCounty); 

  // Plot all functions
  barchart(selectedCounty);
  bubblechart(selectedCounty);

};

init();