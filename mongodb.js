require('dotenv').config()

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URI
const databaseName = "todo-app"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')

  }
  const db = client.db(databaseName)

  db.collection('users').insertOne({
    Name: 'Vero',
    age: 32
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user')
    }
    console.log(result.ops)


  })
})
