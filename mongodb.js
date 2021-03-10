require('dotenv').config()

const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = process.env.MONGODB_URI
const databaseName = "todo-app"


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  db.collection('task').findOne({ _id: new ObjectID("603d2673199fa05933443e74") }, (error, task) => {
    if (error) {
      return console.log('Unable to fetch!')
    }
    console.log(task)
  })


})
