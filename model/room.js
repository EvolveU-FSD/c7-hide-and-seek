let rooms = []

async function createRoom(room) {
  // validate any important fields here!
  let id = rooms.length+1
  room.id = id
  rooms.push(room)
}

async function findRoomById(id) {
    return rooms.find((room) => room.id === id)
}

async function findRoomByName(roomName) {
    return rooms.find((room) => room.name === roomName)
}

async function listRooms() {
    return rooms
}

// load initial rooms
async function loadInitialData() {
    await createRoom({ name: 'front entry', hidingSpots: [ 'in the coat closet' ] })
    await createRoom({ name: 'living room', hidingSpots: [ 'behind the couch', 'in the plant', 'in the drapes' ] })
    await createRoom({ name: 'dining room', hidingSpots: [ 'under the table', 'in the china cabinet' ] })
    await createRoom({ name: 'bathroom', hidingSpots: [ 'in the shower' ] })    
}

loadInitialData()

module.exports = {
    createRoom,
    findRoomById,
    findRoomByName,
    listRooms
}