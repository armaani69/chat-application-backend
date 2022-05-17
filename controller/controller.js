import MessageModel from '../models/models.js';

export const getMessages = async (req, res) => {
  try {
    await MessageModel.find({}, (err, messages) => {
      console.log(err);
      res.status(200).send(messages);
    })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (req, res) => {
  console.log(req.body);
  try {
    let message = new MessageModel(req.body);
    await message.save((err) => {
      if (err) res.sendStatus(500);
      res.sendStatus(200);
    });
    console.log('Sent message to DB');
  } catch (error) {
    console.log(error);
  }
};
