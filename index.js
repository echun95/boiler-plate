const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const {User} = require('./models/User')
const config = require("./config/key")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const { MongoClient } = require('mongodb');
const uri = config.mongoURI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("db connect err")
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => res.send("hello node"))

app.post('/register',(req, res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
   
    return res.status(200).json({
      success: true,
      userInfo: userInfo
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



