import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    //please dont steal my password. iMNVf4ncJh435th5
    const client = await MongoClient.connect(
      "mongodb+srv://almightyblazee:iMNVf4ncJh435th5@reactcluster.zxtew7g.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
