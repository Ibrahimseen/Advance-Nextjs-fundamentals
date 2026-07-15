const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors")

const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use(cors());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "password";
const port = 3000;

client.connect();
console.log("Connected successfully to server");

app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("password");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("password");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("password");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


// const express = require("express");
// const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const app = express();
// dotenv.config();

// app.use(express.json());
// app.use(cors());

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const dbName = "password";

// async function startServer() {
//   await client.connect();
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   const collection = db.collection("password");

//   // GET
//   app.get("/", async (req, res) => {
//     const data = await collection.find({}).toArray();
//     res.json(data);
//   });

//   // POST
//   app.post("/", async (req, res) => {
//     const result = await collection.insertOne(req.body);
//     res.send({ success: true, result });
//   });

//   // DELETE
//   app.delete("/", async (req, res) => {
//     const result = await collection.deleteOne({ id: req.body.id });
//     res.send({ success: true, result });
//   });

//   app.listen(3000, () => {
//     console.log("Server running on 3000");
//   });
// }

// startServer();