const url = "https://raw.githubusercontent.com/shemani2/project_3/jenni/total_combined_datat.json";

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
                size: countyData["Total New Cases"],
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

function optionChanged(selectedCounty) {
    d3.json(url)
        .then((data) => {
            bubblechart(selectedCounty, data.metadata);
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        });
}

init();

init();