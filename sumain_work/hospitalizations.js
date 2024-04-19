// Fetch data from the first API (hospitalization rates)
const hospitalizationAPI = "https://api.covidactnow.org/v2/county/TX.timeseries.json?";
fetch(hospitalizationAPI)
  .then(response => response.json())
  .then(hospitalizationData => {
    // Fetch data from the second API (county boundaries)
    const countyBoundariesAPI = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-county-boundaries/records?limit=20&refine=state_name%3A%22Texas%22&refine=stusab%3A%22TX%22';
    fetch(countyBoundariesAPI)
      .then(response => response.json())
      .then(geojsonData => {
        // Process and combine data
        const combinedData = [];
        hospitalizationData.forEach(hospitalData => {
          const countyName = hospitalData.county;
          const hospitalizationRate = hospitalData.hospitalizationRate;
          const countyGeojson = geojsonData.results.find(county => county.fields.county === countyName);
          if (countyGeojson) {
            const coordinates = countyGeojson.geometry.coordinates;
            combinedData.push({
              county: countyName,
              coordinates: coordinates,
              hospitalizationRate: hospitalizationRate
            });
          }
        });
        // Visualize data on map
        createChoroplethMap(combinedData);
      })
      .catch(error => console.error("Error fetching county boundaries data:", error));
  })
  .catch(error => console.error("Error fetching hospitalization data:", error));

function createChoroplethMap(data) {
  // Initialize Leaflet map
  const map = L.map('map').setView([31.9686, -99.9018], 6);

  // Add base tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add choropleth layer
  L.geoJSON(data, {
    style: function(feature) {
      return {
        fillColor: getColor(feature.properties.hospitalizationRate),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`<b>${feature.properties.county}</b><br>Hospitalization Rate: ${feature.properties.hospitalizationRate}`);
    }
  }).addTo(map);
}

function getColor(hospitalizationRate) {
  // Define color scale based on hospitalization rate
  // You can customize this function to define your own color scale
  return hospitalizationRate > 500 ? '#800026' :
         hospitalizationRate > 200 ? '#BD0026' :
         hospitalizationRate > 100 ? '#E31A1C' :
         hospitalizationRate > 50  ? '#FC4E2A' :
         hospitalizationRate > 20  ? '#FD8D3C' :
         hospitalizationRate > 10  ? '#FEB24C' :
         hospitalizationRate > 5   ? '#FED976' :
                                     '#FFEDA0';
}
