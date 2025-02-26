
<!-- README.md is generated from README.Rmd. Please edit that file -->

# An R Interface to carto-vl

[![Travis build
status](https://travis-ci.org/crazycapivara/cartovl.svg?branch=master)](https://travis-ci.org/crazycapivara/cartovl)
[![Project Status: Active – The project has reached a stable, usable
state and is being actively
developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

`Rvl` for R makes [carto-vl](https://carto.com/developers/carto-vl/) (an
open source JavaScript library to create vector-based visualizations on
top of [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/)) available
within R via the [htmlwidgets](https://www.htmlwidgets.org/) package.

## Notes

-   The package development is in an early state.
-   Please check the
    [examples](https://github.com/ruralinnovation/Rvl/tree/master/inst/examples)
    as a starting point.

## Installation

You can install the latest version of `Rvl` from github with:

``` r
# install.packages("devtools")
devtools::install_github("ruralinnovation/rvl")

# Install from local dev repo:
# devtools::install()
```

## Example

``` r
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

if (interactive()) map
```
