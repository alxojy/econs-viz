var spec = "https://alxojy.github.io/econs-viz/json_charts/bubble_plot.json";
  vegaEmbed('#bubble', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec = "https://alxojy.github.io/econs-viz/json_charts/map_waterfall.json";
  vegaEmbed('#map-waterfall-area', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
