const url = "https://raw.githubusercontent.com/shemani2/project_3/jenni/static/total_combined_datat.json";

function init() {
    d3.json(url)
        .then((data) => {
            let dropdownMenu = d3.select("#selDataset");
            let countyNames = data.county;
            countyNames.forEach((name) => {
                dropdownMenu.append("option").text(name).property("county", name);
            });
            let selectedCounty = countyNames[0];
            bubblechart(selectedCounty, data.metadata);
            barchart(selectedCounty, data.ditto);
            piechart(selectedCounty, data.cookie);
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        });
}

function bubblechart(selectedCounty, metadata) {
    let filteredData = metadata.filter(county => county.County === selectedCounty);
    if (filteredData.length === 0) {
        console.log("No data available for the selected county.");
        return;
    }
    let traceData = [];
    filteredData.forEach((countyData) => {
        let trace = {
            x: [countyData["Total New Cases"]],
            y: [countyData.Year],
            text: [countyData.County],
            mode: "markers",
            marker: {
                size: countyData["Total New Cases"] / 5,
                color: countyData.Year, // Using different colors for different years
                colorscale: "Earth"
            }
        };
        traceData.push(trace);
    });

    let layout = {
        xaxis: { title: "Total New Cases" },
        yaxis: { title: "Year" }
    };

    Plotly.newPlot("bubble", traceData, layout);
}

function barchart(selectedCounty, ditto) {
    let filteredData = ditto.filter(county => county.County === selectedCounty);
    if (filteredData.length === 0) {
        console.log("No data available for the selected county.");
        return;
    }

    let traceData = {
        x: filteredData.map(data => data["Vaccinations"]),
        y: filteredData.map(data => data.Year),
        text: filteredData.map(data => data.County),
        type: "bar",
        marker: {
            color: filteredData.map(data => getColorForYear(data.Year)) // Assign color based on year
        },
        orientation: "h"
    };

    let layout = {
        title: "Total Vaccinations by Year",
        xaxis: { title: "Total Vaccinations" },
        yaxis: { title: "Year" }
    };

    Plotly.newPlot("bar", [traceData], layout);
}

// Function to map year to color
function getColorForYear(year) {
    // Define colors for different years (you can customize this)
    const yearColors = {
        2021: "#1f77b4",
        2022: "#ff7f0e",
        2023: "#2ca02c",
        // Add more years and corresponding colors as needed
    };
    
    // Return color based on year, default to gray if year not found
    return yearColors[year] || "#888888";
}


function piechart(selectedCounty, cookie) {
    let filteredData = cookie.filter(county => county.County === selectedCounty);
    if (filteredData.length === 0) {
        console.log("No data available for the selected county.");
        return;
    }

    let traceData = {
        labels: filteredData.map(data => data.Year),
        values: filteredData.map(data => data["Total Usage"]),
        type: "pie",
        marker: {
            colors: filteredData.map(data => getColorForYear(data.Year)) // Assign color based on year
        }
    };

    let layout = {
        title: "Total Hospitalizations Due to Covid"
    };

    Plotly.newPlot("pie", [traceData], layout);
}


function optionChanged(selectedCounty) {
    d3.json(url)
        .then((data) => {
            bubblechart(selectedCounty, data.metadata);
            barchart(selectedCounty, data.ditto); 
            piechart(selectedCounty, data.cookie);
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        });
}

init();