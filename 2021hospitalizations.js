// Make a GET request to retrieve the hospitalization data from the API
const hospitalizationAPI = "https://api.covidactnow.org/v2/county/TX.timeseries.json?";
fetch(hospitalizationAPI)
  .then(response => response.json())
  .then(hospitalizationData => {
    // Process the hospitalization data to filter for March 2021 entries
    const hospitalizationsMarch2021 = hospitalizationData.filter(countyData => {
      return countyData.actualsTimeseries.some(entry => entry.date.startsWith("2021-03"));
    });
    
    // Make a GET request to retrieve the GeoJSON data from the API
    const geojsonAPI = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-county-boundaries/records?limit=20&refine=state_name%3A%22Texas%22&refine=stusab%3A%22TX%22';
    fetch(geojsonAPI)
      .then(response => response.json())
      .then(geojsonData => {
        // Extract county names and coordinates from GeoJSON data
        const countyCoordinates = {};
        geojsonData.results.forEach(county => {
          const countyName = county.fields.county_name;
          const coordinates = [county.fields.geo_point_2d.lat, county.fields.geo_point_2d.lon];
          countyCoordinates[countyName] = coordinates;
        });
        
        // Combine hospitalization rates data with county coordinates
        const combinedData = hospitalizationsMarch2021.map(countyData => {
          const countyName = countyData.county;
          const coordinates = countyCoordinates[countyName];
          const hospitalizationRate2021 = countyData.actualsTimeseries.find(entry => entry.date.startsWith("2021-03")).hospitalizationsPerCapita;
          return {
            county: countyName,
            coordinates: coordinates,
            hospitalizationRate2021: hospitalizationRate2021
          };
        });
        
        // Visualize the combined data on the map
        createChoroplethMap(combinedData);
      })
      .catch(error => console.error("Error fetching GeoJSON data:", error));
  })
  .catch(error => console.error("Error fetching hospitalization data:", error));
