import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://shivam9292:shivam123@cluster0.fk9kj.mongodb.net/MeetupsDatabase?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('MeetupsDatabase');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    
    res.status(201).json({message: 'Meetup recorded'});
  }
}

export default handler;
