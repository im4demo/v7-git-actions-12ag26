import express from 'express'
const app = express();
const PORT = process.env.PORT || 8080;
const UPD = 'UPD-4';


app.get('/', (req, res) => {
    return res.send(`Hello from Server - ${PORT} - ${UPD}`)
})

app.listen(PORT, () => {
    console.log(`Server is up & running on port ${PORT} - ${UPD}`)
})


