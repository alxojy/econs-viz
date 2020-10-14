var spec = "https://alxojy.github.io/econs-viz/json_charts/bubble_plot.json";
  vegaEmbed('#bubble', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec = "https://alxojy.github.io/econs-viz/json_charts/map.json";
  vegaEmbed('#gdp-map', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec = "https://alxojy.github.io/econs-viz/json_charts/waterfall.json";
vegaEmbed('#waterfall', spec).then(function(result) {
  result.transform.filter("datum.country == 'Japan'");
  //result.spec.layer[0].transform.filter = "datum.country == 'Japan'";
  console.log(result.spec.layer[0]);
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);