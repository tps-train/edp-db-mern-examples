import { MongoClient } from "mongodb";

const url = "mongodb://root:secret123@localhost:27017/";

async function run() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const dbo = client.db("socks");
    const result = await dbo.collection("socks").find({}).toArray();
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
