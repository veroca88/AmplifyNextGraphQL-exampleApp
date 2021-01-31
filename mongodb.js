require('dotenv').config()

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URL
const databaseName = 'toDo-app'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
if (error) return console.log('Unable to connect to database!')

const db = client.db(databaseName)

db.collection('users').insertOne({
    name: 'Vero',
    age: 32
})
}
    )

