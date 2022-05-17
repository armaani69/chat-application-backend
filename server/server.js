import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import senderMessageRoutes from '../routes/routes.js';

let app = express();
app.use(cors());
let __dirname = path.resolve();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());

const db_url =
  'mongodb+srv://armaani69:dk8tTLl4ceWe5tQ7@cluster0.ks7vq.mongodb.net/chats';

app.use(senderMessageRoutes);

const connectToDb = async () => {
  mongoose.connect(db_url, (err) => {
    console.log('Connected to the database', err);
  });
};

const PORT = process.env.PORT || 8080;

const listenToApp = async () => {
  const server = app.listen(PORT, () => {
    console.log(
      'Server is successfully running on port',
      server.address().port,
    );
  });
};

await listenToApp();
connectToDb();
