const express = require('express')
const app = express()
const port = 5000


  const { MongoClient } = require('mongodb');
  const uri = "mongodb+srv://leeyoungchun:<password>@boilerplate.qrddk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });





app.get('/', (req, res) => res.send("hello node"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



