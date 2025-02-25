library(sf)
library(geojsonio)
library(Rvl)

data_url <- paste0(
  "https://raw.githubusercontent.com/uber-common/deck.gl-data/",
  "master/examples/geojson/vancouver-blocks.json"
)

blocks <- st_read(data_url) %>%
  geojson_json()

viz_def <- list(
  "color: ramp($growth, [red, green, yellow])"
)

map <- cartovl() %>%
  set_view(latitude = 49.254, longitude = -123.13, zoom = 11) %>%
  add_layer(blocks, viz_def)

map <- cartovl() %>%
  set_view(latitude = 49.254, longitude = -123.13, zoom = 11) %>%
  add_external_geojson_layer(data_url, viz_def)


if (interactive()) map
