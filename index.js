import express from 'express'
const app = express();
const PORT = process.env.PORT || 8080;
const DIR = 'v7-git-actions-12ag26';
const UPD = 'UPD-6-Srvr';


app.get('/', (req, res) => {
    return res.send(`Hello from Server - ${PORT} - ${DIR} - ${UPD}`)
})


app.listen(PORT, () => {
    console.log(`Server is up & running on port ${PORT} - ${DIR} - ${UPD}`)
})


