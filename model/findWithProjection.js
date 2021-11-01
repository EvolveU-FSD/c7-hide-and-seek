const mongoDb = require('./db')

async function main() {
    let collection = await mongoDb.getCollection('rooms')
    let roomProjected = await collection.findOne({name: 'front entry'}, 
        { 
            projection: { _id:0, name:1 }
        }
    )
    console.log('FOund the room ', roomProjected)
}

main()