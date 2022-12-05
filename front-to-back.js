'use strict';

const WebSocket = require('ws');
const net = require('net');

const socket = new net.Socket();

const server = new WebSocket.Server({
  port: 3001,
});

server.on('connection', (ws) => {
  ws.send('Connection established');
  ws.on('message', (data) => {
    const obj = JSON.parse(data);
    console.dir(obj);
    socket.write(data);
  });
});

server.on('close', (ws) => {
  ws.send('Connection closed');
})

socket.on('data', (data) => {
  console.log(`Received: ${data}`);
});

socket.connect({
  host: '127.0.0.1',
  port: 9000,
}, () => {
});