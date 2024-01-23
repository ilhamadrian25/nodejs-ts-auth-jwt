import express from 'express'
import routes from "./Routes/Routes";
import dotenv from 'dotenv'
import { SyncDatabase } from './Config/SyncDatabase';

dotenv.config()

const app = express()
const port = 5004

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})

SyncDatabase().then(() => {
    console.log('SyncDatabase completed.');
}).catch((error) => {
    console.error('SyncDatabase error:', error);
});

app.use('/api/', routes)