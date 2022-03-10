import Dijkstra from "./Dijkstra.js";
let edges = [
  {
    firstNode: "u",
    secondNode: "x",
    weight: parseInt(5),
  },
  {
    firstNode: "u",
    secondNode: "v",
    weight: parseInt(7),
  },
  {
    firstNode: "v",
    secondNode: "w",
    weight: parseInt(3),
  },
  {
    firstNode: "w",
    secondNode: "x",
    weight: parseInt(4),
  },
  {
    firstNode: "y",
    secondNode: "x",
    weight: parseInt(7),
  },
  {
    firstNode: "w",
    secondNode: "y",
    weight: parseInt(8),
  },
  {
    firstNode: "v",
    secondNode: "y",
    weight: parseInt(4),
  },
  {
    firstNode: "y",
    secondNode: "z",
    weight: parseInt(2),
  },
  {
    firstNode: "z",
    secondNode: "x",
    weight: parseInt(9),
  },
  {
    firstNode: "u",
    secondNode: "w",
    weight: parseInt(3),
  },
];
let nodes = ["u", "v", "w", "x", "y", "z"];

edges = [{ firstNode: "router0", secondNode: "router1", weight: 1 }];
nodes = ["router0", "router1", "router2"];

let dijkstra = new Dijkstra(edges, nodes, nodes[0]);
let finalConnections = dijkstra.performDijkstra();

function tableifyEdges(data) {
  let table = document.createElement("table");
  let firstNodeHeader = document.createElement("th");
  firstNodeHeader.textContent = "firstNode";
  table.appendChild(firstNodeHeader);

  let secondNodeHeader = document.createElement("th");
  secondNodeHeader.textContent = "secondNode";
  table.appendChild(secondNodeHeader);

  let weightHeader = document.createElement("th");
  weightHeader.textContent = "weight";
  table.appendChild(weightHeader);

  for (let datum of data) {
    let tableRow = document.createElement("tr");
    let firstNodeCell = document.createElement("td");
    firstNodeCell.textContent = datum.firstNode;
    tableRow.appendChild(firstNodeCell);

    let secondNodeCell = document.createElement("td");
    secondNodeCell.textContent = datum.secondNode;
    tableRow.appendChild(secondNodeCell);

    let weightCell = document.createElement("td");
    weightCell.textContent = datum.weight;
    tableRow.appendChild(weightCell);

    table.appendChild(tableRow);
  }
  document.body.appendChild(table);
}
function tableifyNodes(nodes) {
  let table = document.createElement("table");
  let nodeHeader = document.createElement("th");
  nodeHeader.textContent = "Node";
  table.appendChild(nodeHeader);

  for (let node of nodes) {
    let tableRow = document.createElement("tr");
    let nodeCell = document.createElement("td");
    nodeCell.textContent = node;
    tableRow.appendChild(nodeCell);
    table.appendChild(tableRow);
  }

  document.body.appendChild(table);
}
function tableifyFinalConnections(finalConnections) {
  let table = document.createElement("table");
  let Node = document.createElement("th");
  Node.textContent = "Node";
  table.appendChild(Node);

  let Weight = document.createElement("th");
  Weight.textContent = "Weight";
  table.appendChild(Weight);

  let PrevNode = document.createElement("th");
  PrevNode.textContent = "PrevNode";
  table.appendChild(PrevNode);

  for (let datum in finalConnections) {
    let tableRow = document.createElement("tr");
    let nodeCell = document.createElement("td");
    nodeCell.textContent = datum;
    tableRow.appendChild(nodeCell);

    let weightCell = document.createElement("td");
    weightCell.textContent = finalConnections[datum].weight;
    tableRow.appendChild(weightCell);

    let prevNodeCell = document.createElement("td");
    prevNodeCell.textContent = finalConnections[datum].prevNode;
    tableRow.appendChild(prevNodeCell);

    table.appendChild(tableRow);
  }

  document.body.appendChild(table);
}
tableifyEdges(edges);
tableifyNodes(nodes);
tableifyFinalConnections(finalConnections);
