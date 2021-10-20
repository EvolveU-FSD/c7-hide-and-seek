let rooms = [
    { name: 'front entry', hidingSpots: [ 'in the coat closet' ] },
    { name: 'living room', hidingSpots: [ 'behind the couch', 'in the plant', 'in the drapes' ] },
    { name: 'dining room', hidingSpots: [ 'under the table', 'in the china cabinet' ] },
    { name: 'bathroom', hidingSpots: [ 'in the shower' ] }
]

function findRoomByName(roomName) {
    return rooms.find((room) => room.name === roomName)
}

function listRooms() {
    return rooms
}

module.exports = {
    findRoomByName,
    listRooms
}