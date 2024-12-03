# tplink-toggle-light-by-ip
Toggle TP Link lights by IP address currently used with shelly i4 webhooks

e.g. Assuming light bulb IP is 2.2.2.2

```
HOST=0.0.0.0 PORT=1111 npm start
```

```
curl http://0.0.0.0:1111/toggle/2.2.2.2
```