import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/server.db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    connectDB();
})