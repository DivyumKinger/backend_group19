const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to EC2 Environment')
})

app.listen(port, () => {
    console.log(`backend is running on port ${port}`)
})