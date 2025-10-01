import express from 'express';

const app = express();


app.get("/", (req, res) => {
    res.send("I am working fine")
})

app.listen(5000, () => {
    console.log("Server is running at port 5000")
})