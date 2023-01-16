// A data structure that consists of a finite set of nodes and a set of edges connecting these nodes.
// Can be represented using an object or an array.

// EXAMPLE
let graph = {
    Seattle: ['Sedro_Woolley', 'Vancouver'],
    Sedro_Woolley: ['Seattle', 'Vancouver', 'Anchorage'],
    Vancouver: ['Seattle', 'Sedro_Woolley', 'Anchorage'],
    Anchorage: ['Sedro_Woolley', 'Vancouver']
};

//     Graph visualized as:
//             Seattle
//            /      \
// Sedro_Woolley -- Vancouver
//            \      /
//            Anchorage

// The same graph using an adjacency matrix (array):
graph = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

// The rows and columns of the matrix represent the nodes of the graph, and the values in the matrix represent the edges between the nodes.
// For example, the value at index (0, 1) in the matrix is 1, which means that there is an edge between node 0 (Seattle) and node 1 (Sedro_Woolley). The value at index (0, 2) is also 1, which means that there is an edge between node 0 (Seattle) and node 2 (Vancouver).