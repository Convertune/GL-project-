'use strict';

const WebSocket = require('ws');
const fs = require('fs');
const { exec } = require('child_process');
const sm_settings = require('./sm-settings');

const server = new WebSocket.Server({
  port: 3002,
});

server.on('connection', (ws) => {
  ws.send('Connection established');
  ws.on('message', (data) => {
    const obj = JSON.parse(data);
    const my_data = obj["eq_parser"].concat(sm_settings);
    const finally_data = {"eq_parser": my_data};
    const data_to_file = JSON.stringify(finally_data, null, '\t');
    fs.writeFile("./parser.json", data_to_file, (err) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log('File successfully created');
      }
    });
    exec('cat ./parser.json', (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
       // the *entire* stdout and stderr (buffered)
       console.log(`stdout: ${stdout}`);
       console.log(`stderr: ${stderr}`);
      }
    });
  });
});

server.on('close', (ws) => {
  ws.send('Connection closed');
})