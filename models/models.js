import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Message = new Schema({ message: String, time: String, avatar: String });

const MessageModel = mongoose.model('Message', Message);

export default MessageModel;
