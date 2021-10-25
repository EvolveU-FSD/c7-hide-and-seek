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

module.exports = {
    createRoom,
    findRoomById,
    findRoomByName,
    listRooms
}