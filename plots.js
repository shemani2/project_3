const url = "https://raw.githubusercontent.com/shemani2/project_3/jenni/total_combined_datat.json"

// Read the JSON file from the URL
// d3.json(url).then(function(data) {
//   console.log(data);
// });


function init() {
  d3.json(url).then((data) => {

      // Dropdown Menu
      // let dropdownMenu = d3.select("#selDataset");

      // Variable for sample names
      // let county = data.county;

      // Add samples to dropdown menu
      // county.forEach((name) => {
      //     // dropdownMenu.append("option").text(name).property("county", name);

      // });

      // Set the first sample of the list
      // let samplechart = county[0];

      // Get value of the samples
      // console.log(samplechart)
      console.log(data.metadata)
      const someId = "Anderson County"
      const result = data.metadata.filter(county => county.County == someId)
      console.log(result)
      // Plots 
      // barchart(samplechart);
      // bubblechart(samplechart);
  });
};

function init() {
  d3.json(url).then((data) => {
      let dropdownMenu = d3.select("#selDataset");
      let names = data.county;
      names.forEach((name) => {
          dropdownMenu.append("option").text(name).property("county", name);

      });
      let samplechart = names[0];
      console.log(samplechart)

      // barchart(samplechart);
      bubblechart(samplechart);
  });
};

// Metadata for demographics
// function demographics(samplechart) {

//   // D3 to retrieve all the data
//   d3.json(url).then((data) => {

//       // Retrieve all metadata
//       let metadata = data.metadata;

//       // Call the custom function with filter()
      
//       let filteredData = data.metadata.filter(county => meta.County == selectedCounty);

//       // Log the data to console
//       console.log(filteredData)

//       // First index of the array
//       let obj = filteredData[0];

//       // Clear metadata content to make it ready for user input
//       d3.select("#sample-metadata").html("");

//       // Call Object.enteries() 
//       Object.entries(obj).forEach(([key,county]) => {

//           // Log data to console
//           console.log(key,county);

//           // Key/Value pair to append 
//           d3.select("#sample-metadata").append("h5").text(`${key}: ${county}`);
//       });
//   });

// }

// Bar chart 

// function barchart(selectedCounty) {
//   // D3 to retrieve all the data
//   d3.json(url)
//     .then((data) => {
      
//       // Filter data for the selected county
//       if (!Array.isArray(data)) {
//         data = Object.values(data);
//       }

//       function selectData(county){
//         return county.Year == 2023; 
//       }
//       let countyyear = data.filter(selectData)
//       console.log(countyyear)
//       console.log("this is selected county", selectedCounty)
//       console.log("this is data", data)
//       console.log(data.JSON.filter(({county}) => county === 'Anderson County'));
//       let filteredData = data.filter((entry) => entry.County === selectedCounty);

//       // Check if data is available for the selected county
//       if (filteredData.length === 0) {
//         console.log("No data available for the selected county.");
//         return;
//       }
//       const newDataObject = {
//         county: dataEntry.County,
//         totalNewCases: dataEntry["Total New Cases"],
//         month: dataEntry.Month,
//         year: dataEntry.Year,
//         totalVaccinations: dataEntry["Total Vaccinations"]
//       };
    
//       console.log(newDataObject);
//       // Extract relevant data from the first entry (assuming only one entry per county)
      

//       // Log data to console
//       console.log(county, totalVaccinations, year);

//       // Create a Plotly trace for the bar chart
//       let trace = [{
//         x: ["Total Vaccinations"],
//         y: [totalVaccinations],
//         type: "bar",
//         marker: {
//           color: "#4682B4"
//         }
//       }];

//       // Define layout for the bar chart
//       let layout = {
//         title: `Total Vaccinations for ${county} (${year})`,
//         xaxis: { title: "Category" },
//         yaxis: { title: "Total New Cases" }
//       };

//       // Use Plotly to plot the bar chart
//       Plotly.newPlot("bar", trace, layout);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }


// Bubble chart


function bubblechart(selectedCounty) {
  // D3 to retrieve all the data
  d3.json(url).then((data) => {
      
      // Filter data for the selected county
      // const someId = "Anderson County"
      // const result = data.metadata.filter(county => county.County == someId)
      // console.log(result)

      
      let filteredData = data.metadata.filter(county => county.County)
      console.log(filteredData)

      let obj = filteredData[0]

      let metadata.County = obj.county;

      // Create newDataObject with correct variable names
      // const newDataObject = {
      //     county: obj.County,
      //     totalNewCases: obj["Total New Cases"],
      //     month: obj.Month,
      //     year: obj.Year,
      //     totalVaccinations: obj["Total Vaccinations"]
      // };

      // Log data to console
      console.log(metadata.county, data.metadata.totalNewCases, data.metadata.year);

      // Trace for bubble chart
      let trace1 = {
          x: [data.metadata.totalNewCases],
          y: [data.metadata.year],
          text: [obj.county],
          mode: "markers",
          marker: {
              size: metadata.totalNewCases,
              color: obj.county,
              colorscale: "Earth"
          }
      };

      // Apply layout
      let layout = {
          xaxis: { title: "Total New Cases" }
      };

      // Use Plotly to plot bubble chart
      Plotly.newPlot("bubble", [trace1], layout);

  });
}

// Updates plots when sample is changed
function optionChanged(selectedCounty) { 

  // Log data to new values
  console.log(selectedCounty); 

  // Plot all functions
  // barchart(selectedCounty);
  bubblechart(selectedCounty);

};

init();