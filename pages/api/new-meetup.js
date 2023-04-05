import { MongoClient } from "mongodb";

const dotenv = require('dotenv')
dotenv.config()

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    //please dont steal my password. iMNVf4ncJh435th5
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@${process.env.CLUSTER}.zxtew7g.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    await meetupsCollections.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
