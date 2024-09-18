export const hillshading = {
  id: "hillshading",
  type: "hillshade",
  source: "dem",
  maxzoom: 15,
  paint: {
    "hillshade-exaggeration": [
      "interpolate",
      ["linear"],
      ["zoom"],
      6,
      1,
      12,
      0.7,
      15,
      0,
    ],
    "hillshade-shadow-color": "hsla(30, 14%, 76%, 1)",
    "hillshade-highlight-color": "hsla(30, 44%, 99%, 1)",
  },
};
