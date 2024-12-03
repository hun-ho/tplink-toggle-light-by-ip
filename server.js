const express = require('express');
const { Client } = require('tplink-smarthome-api');

const app = express();
const client = new Client();

app.listen(process.env.PORT, process.env.HOST);

app.get('/', (req, res) => {
    res.send('success');
});

app.get('/toggle/:ip', (req, res) => {
    client.getDevice({ host: req.params.ip }).then(device => {
        device.getSysInfo().then(info => {
            device.lighting.setLightState({
                on_off: info.light_state.on_off !== 1,
            });
        })
    });
});