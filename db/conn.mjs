import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// Save Connection string to variable
const connectionStr = process.env.mongoURI;

let client = new MongoClient(connectionStr);

let conn;

try {

    conn = await client.connect();

    console.log('Connected to MongDB')

} catch (err) {

    console.error(err);

}
let db = conn.db('sample_training');

export default db;