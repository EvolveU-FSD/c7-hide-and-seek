const { ObjectId } = require('bson')
const db = require('./db')

async function createRoom(roomData) {
    let roomCollection = await db.getCollection('rooms')
    let insertResult = await roomCollection.insertOne(roomData)
    return insertResult.insertedId.id
}

async function findRoomById(id) {
    let roomCollection = await db.getCollection('rooms')
    return roomCollection.findOne({ _id: ObjectId(id) })
}

async function findRoomByName(roomName) {
    let roomCollection = await db.getCollection('rooms')
    return roomCollection.findOne({ name: roomName })
}

async function listRooms() {
    let roomCollection = await db.getCollection('rooms')
    let findCursor = roomCollection.find({})
    let rooms = await findCursor.toArray()
    return rooms
}

module.exports = {
    createRoom,
    findRoomById,
    findRoomByName,
    listRooms
}