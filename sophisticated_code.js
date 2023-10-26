/* sophisticated_code.js */

// This code is a sophisticated implementation of a chat application
// It includes a server and client side, and uses websockets for real-time communication

// Import required modules
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Create express app and initialize server
const app = express();
const server = http.createServer(app);

// Setup WebSocket server
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Set();

// Handle new WebSocket connection
wss.on('connection', (ws) => {
  // Add client to the set
  clients.add(ws);
  
  // Handle incoming messages from clients
  ws.on('message', (message) => {
    // Broadcast the message to all clients
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  });
  
  // Handle client disconnection
  ws.on('close', () => {
    // Remove client from the set
    clients.delete(ws);
  });
});

// Serve static files
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Client-side code
// Connect to WebSocket server
const ws = new WebSocket(`ws://localhost:${port}`);

// Handle incoming messages from server
ws.onmessage = (event) => {
  const message = event.data;
  
  // Display message in the chat interface
  console.log(`Received: ${message}`);
};

// Send a message to the server
ws.send('Hello server, this is a test message.');