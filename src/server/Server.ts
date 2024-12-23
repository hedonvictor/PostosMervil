import express from "express";
import 'dotenv/config'
import cors from 'cors'

import './shared/services/translationsYup'
import {router} from './routes'
3
const server = express();

server.use(express.json());
server.use(cors());

// server.use(cors({
//     origin: process.env.ENABLED_CORS?.split(';') || []
// }));

server.use(router);

export {server};

