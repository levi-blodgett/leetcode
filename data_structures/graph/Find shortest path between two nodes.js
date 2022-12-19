// graph, queue, set, and breadth-first search

// init graph given
let graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c']
};

function findShortestPath(graph, start, end) {
    // Create a queue for breadth-first search
    const queue = [[start]];

    // Create a Map to store visited nodes
    const visited = new Map();
    visited.set(start, null);

    // While the queue is not empty
    while (queue.length > 0) {
        // Take the first path from the queue
        const path = queue.shift();
        // Get the last node from the path
        const node = path[path.length - 1];

        // If the node is the end node, return the path
        if (node === end) {
            console.log(queue);
            return path;
        }

        // Add all of the neighbors of the node to the queue
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, node);
                queue.push(path.concat(neighbor));
            }
        }
    }

    // If no path was found, return null
    return null;
}

// Find the shortest path from 'a' to 'd'
console.log(findShortestPath(graph, 'a', 'd')); // ['a', 'b', 'd']

// Set the graph to not have a path from 'a' to 'd'
graph.b.pop();
graph.c.pop();

// Find the shortest path from 'a' to 'd'
console.log(findShortestPath(graph, 'a', 'd')); // null