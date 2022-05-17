import express from 'express';
import { getMessages, sendMessage } from '../controller/controller.js';

const senderMessageRoutes = express.Router();

senderMessageRoutes.get('/sendMessage', getMessages);

senderMessageRoutes.post('/sendMessage', sendMessage);

export default senderMessageRoutes;
