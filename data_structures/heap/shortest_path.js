// Find the shortest path between two nodes using Dijkstra's algorithm on a heap-based implementation of a priority queue

import PriorityQueue from "./priority_queue.js";

const graph = {
    a: { b: 1, c: 1 },
    b: { a: 1, c: 1, d: 1 },
    c: { a: 1, b: 1, d: 1 },
    d: { b: 1, c: 1 },
};

function findShortestPath(graph, start, end) {
    // Create a priority queue to store the nodes
    const pq = new PriorityQueue();

    // Create a distance object to store the distances from the start node to each node
    const distances = {};

    // Initialize the distances to all nodes as infinity, except for the start node which is 0
    for (const node of Object.keys(graph)) {
        distances[node] = node === start ? 0 : Infinity;
    }

    // Add the start node to the priority queue with a priority of 0
    pq.enqueue(start, 0);

    // Create a previous object to store the shortest path
    const previous = {};

    // Create a visited set to mark visited nodes
    const visited = new Set();

    // While the priority queue is not empty
    while (!pq.isEmpty()) {
        // Dequeue the node with the smallest distance (highest priority)
        const node = pq.dequeue();

        // If the node has already been visited, skip it
        if (visited.has(node)) continue;

        // Mark the node as visited
        visited.add(node);

        // If the node is the end node, we have found the shortest path
        if (node === end) {
            // Use the previous object to reconstruct the path
            const path = [end];
            let current = end;
            while (current in previous) {
                path.unshift(previous[current]);
                current = previous[current];
            }
            return path;
        }

        // Iterate through the neighbors of the node
        for (const neighbor in graph[node]) {
            // Calculate the distance from the start node to the neighbor through the current node
            const distance = distances[node] + graph[node][neighbor];

            // If the distance from the start node to the neighbor through the current node is shorter than the current distance, update the distance and add the neighbor to the priority queue
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = node;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    // If we get here, it means that we have not found a path between the start and end nodes
    return null;
}

// Find the shortest path from 'a' to 'd'
console.log(findShortestPath(graph, 'a', 'd')); // ['a', 'b', 'd']