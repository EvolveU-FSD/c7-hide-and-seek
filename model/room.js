let rooms = [
    { id: 1, name: 'front entry', hidingSpots: [ 'in the coat closet' ] },
    { id: 2, name: 'living room', hidingSpots: [ 'behind the couch', 'in the plant', 'in the drapes' ] },
    { id: 3, name: 'dining room', hidingSpots: [ 'under the table', 'in the china cabinet' ] },
    { id: 4, name: 'bathroom', hidingSpots: [ 'in the shower' ] }
]

function findRoomById(id) {
    return rooms.find((room) => room.id === id)
}

function findRoomByName(roomName) {
    return rooms.find((room) => room.name === roomName)
}

function listRooms() {
    return rooms
}

module.exports = {
    findRoomById,
    findRoomByName,
    listRooms
}