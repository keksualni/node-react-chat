import express from 'express';
import WebSocket from 'ws';
import http from 'http';

const APP_PORT: number = 6969;
const app: any = express();

const server: http.Server = http.createServer(app);
const wss: WebSocket.Server = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  ws.send('Connection opened!');
});

server.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT} :)`);
});
