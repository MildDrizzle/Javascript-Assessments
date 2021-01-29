let mapdata = {
  nodes: [
    { data: { id: "N0-0" } },

    { data: { id: "N0-1" } },

    { data: { id: "N0-2" } },

    { data: { id: "N1-0" } },

    { data: { id: "N1-1" } },

    { data: { id: "N1-2" } },

    { data: { id: "N2-0" } },

    { data: { id: "N2-1" } },

    { data: { id: "N2-2" } },
  ],

  edges: [
    { data: { id: "0-0E", source: "N0-0", target: "N0-1" } },

    { data: { id: "0-0S", source: "N0-0", target: "N1-0" } },

    { data: { id: "0-2W", source: "N0-2", target: "N0-1" } },

    { data: { id: "0-2S", source: "N0-2", target: "N1-2" } },

    { data: { id: "1-1E", source: "N1-1", target: "N1-2" } },

    { data: { id: "1-1W", source: "N1-1", target: "N1-0" } },

    { data: { id: "1-1S", source: "N1-1", target: "N2-1" } },

    { data: { id: "1-1N", source: "N1-1", target: "N0-1" } },

    { data: { id: "2-0E", source: "N2-0", target: "N2-1" } },

    { data: { id: "2-0N", source: "N2-0", target: "N1-0" } },

    { data: { id: "2-2N", source: "N2-2", target: "N1-2" } },

    { data: { id: "2-2W", source: "N2-2", target: "N2-1" } },

    { data: { id: "0-1E", source: "N0-1", target: "N0-2" } },

    { data: { id: "0-1W", source: "N0-1", target: "N0-0" } },

    { data: { id: "0-1S", source: "N0-1", target: "N1-1" } },

    { data: { id: "1-0E", source: "N1-0", target: "N1-1" } },

    { data: { id: "1-0S", source: "N1-0", target: "N2-0" } },

    { data: { id: "1-0N", source: "N1-0", target: "N0-0" } },

    { data: { id: "1-2W", source: "N1-2", target: "N1-1" } },

    { data: { id: "1-2S", source: "N1-2", target: "N2-2" } },

    { data: { id: "1-2N", source: "N1-2", target: "N0-2" } },

    { data: { id: "2-1E", source: "N2-1", target: "N2-2" } },

    { data: { id: "2-1W", source: "N2-1", target: "N2-0" } },

    { data: { id: "2-1N", source: "N2-1", target: "N1-1" } },
  ],
};

fetch("/mapdata")
  .then((res) => res.json())
  .then((json) => {
    if (json.nodes.length) mapdata = json;
    var cy = cytoscape({
      container: document.getElementById("cy"), // container to render in
      elements: mapdata,

      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            height: 20,
            width: 20,
            avoidOverlap: true,
            label: "data(id)",
            "background-color": "blue",
          },
        },

        {
          selector: "edge",
          style: {
            width: 1,
            height: 1,
            "line-color": "#ccc",
          },
        },
      ],

      layout: {
        name: "grid",
        spacingFactor: 0.5,
        rows: 3,
      },
    });

    exportMapdata();
  })
  .catch((err) => {
    console.log(err);
  });

function exportMapdata() {
  fetch("/exportdata", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mapdata),
  }).then((res) => console.log(res));
}
