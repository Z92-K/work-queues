const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

async function updateReportAndSendTo(email) {
    await new Promise(res => setTimeout(res, 30 * 1000)) // waits for 30 seconds
    console.log('done, report sent to', email)
}
app.post('/update-and-send/:email', (req, res) => {
    const { email }  = req.body
    updateReportAndSendTo(email)  
    res.send('this should create a new hit')   
})
const port = 3000
app.listen(port, () => console.log('App listening on port ' + port))