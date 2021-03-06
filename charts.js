var spec = "https://alxojy.github.io/econs-viz/json_charts/bubble_plot.json";
  vegaEmbed('#bubble', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec = "https://alxojy.github.io/econs-viz/json_charts/map_waterfall.json";
  vegaEmbed('#map-waterfall-area', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var spec = "https://alxojy.github.io/econs-viz/json_charts/rank_chart.json";
  vegaEmbed('#rank-chart', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var spec = "https://alxojy.github.io/econs-viz/json_charts/unit_chart.json";
  vegaEmbed('#unit-chart', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var i = 10;
var inv = setInterval(function() {     
    if(i < 100)
        document.getElementById("counter").innerHTML = '$ ' + ++i + ' trillion USD';
    else
        clearInterval(inv);
}, 2000 / 100);