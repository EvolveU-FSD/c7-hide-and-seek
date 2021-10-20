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

let seekerLocation
let hiderRoomName
let hiderHidingSpot

function pickOneAtRandom(arrayOfThings) {
    return arrayOfThings[Math.floor(Math.random() * arrayOfThings.length)]
}

function startGame() {
    let allRooms = listRooms()
    let hiderRoom = pickOneAtRandom(allRooms)
    hiderRoomName = hiderRoom.name
    hiderHidingSpot = pickOneAtRandom(hiderRoom.hidingSpots)
    seekerLocation = findRoomByName('front entry')
    console.log('Don\'t tell the seeker, but the hider is ' + hiderHidingSpot + ' in the ' + hiderRoomName + '\n')
}

function move(roomName) {
    console.log('Seeker moved to ', roomName)
    seekerLocation = findRoomByName(roomName)
}

function look() {
    return seekerLocation
}

function search(hidingSpot) {
    return (seekerLocation.name === hiderRoomName) && (hidingSpot === hiderHidingSpot)
}

// start a game by default to initialize the hider and seeker locations
startGame()

module.exports = {
    listRooms,
    startGame,
    move,
    look,
    search
}