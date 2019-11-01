# work queues

This API will serve requests for the "Radio Rooms App", so that monitors can
track and schedule radio interactions.

# How to Run 

Ensure all dependencies are installed:

```
npm ,express and bull
```

Then, run `node worker.js` to run the API. It will be restarted when changing anything under 


# How to Run redis 
 
run `redis-cli`
target emails `KEYS '*emails' `

then run `node worker.js` to see the response.
...