import express from 'express'
import routes from "./Routes/Routes";

const app = express()
const port = 5004

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})

app.use('/api/', routes)