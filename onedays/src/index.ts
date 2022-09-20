import express from "express";
const app = express()
const port = 4000


// Router
app.get('/', (req, res) => {
    res.send('<h1>Welcome NodeJS</h1>')
})

app.listen(port, () => {
    console.log("Listen Port:", port);
})