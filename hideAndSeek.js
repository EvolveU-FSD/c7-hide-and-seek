let rooms = ['living room', 'dining room', 'bathroom']
let hiderLocation
let seekerLocation

function listRooms() {
    return rooms
}

function startGame() {
    hiderLocation = rooms[Math.floor(Math.random()*rooms.length)]
}

function move(room) {
    console.log('Seeker moved to ', room)
    seekerLocation = room
}

function search() {
    return (seekerLocation === hiderLocation)
}

module.exports = {
    listRooms,
    startGame,
    move,
    search
}