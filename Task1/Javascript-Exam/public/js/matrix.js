function mapdata() {
  let nodes = [];
  let edges = [];

  //defining a predefined matrix of 2x2
  const matrixRow = 4;
  const matrixColumn = 4;
  // Write your logic here...

  const outerArray = (row, col) => {
    if (col >= matrixColumn) {
      return 0;
    }
    if (row >= matrixRow) {
      return 1;
    }

    nodes.push({ data: { id: `N${row}-${col}` } });
    //For Column Recursion

    if (outerArray(row, col + 1) == 1) {
      return 1;
    }
    //For Row Recursion
    return outerArray(row + 1, 0);
  };

  const innerArray = (row, col) => {
    //if the column is greater than the max size
    if (col >= matrixColumn) {
      return 0;
    }
    //if the row is greater than the max size
    if (row >= matrixRow) {
      return 1;
    }
    //check if there is a node in east
    if (col + 1 < matrixColumn) {
      edges.push({
        data: {
          id: `${row}-${col}E`,
          source: `N${row}-${col}`,
          target: `N${row}-${col + 1}`,
        },
      });
    }
    //check if there is a node in west
    if (col - 1 >= 0) {
      edges.push({
        data: {
          id: `${row}-${col}W`,
          source: `N${row}-${col}`,
          target: `N${row}-${col - 1}`,
        },
      });
    }
    //check if there is a node in south

    if (row + 1 < matrixRow) {
      edges.push({
        data: {
          id: `${row}-${col}S`,
          source: `N${row}-${col}`,
          target: `N${row + 1}-${col}`,
        },
      });
    }
    //check if there is a node in north
    if (row - 1 >= 0) {
      edges.push({
        data: {
          id: `${row}-${col}N`,
          source: `N${row}-${col}`,
          target: `N${row - 1}-${col}`,
        },
      });
    }

    if (innerArray(row, col + 1) == 1) {
      return 1;
    }
    //For Row Recursion
    return innerArray(row + 1, 0);
  };

  outerArray(0, 0);
  innerArray(0, 0);
  console.log(nodes);
  console.log(edges);
  console.log(edges.length);

  elements = {
    nodes,
    edges,
  };

  return elements;
}
mapdata();
module.exports.mapdata = mapdata;
