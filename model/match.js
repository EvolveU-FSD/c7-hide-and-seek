let { findRoomByName, listRooms } = require('./roomMongoose')
let mongoose = require('./mongooseDb')

let matchSchema = new mongoose.Schema({ 
    seekerRoomName: String,
    hiderRoomName: String,
    hiderHidingSpot: String
})

matchSchema.methods.move = async function(roomName) {
    console.log('Seeker moved to ', roomName)
    this.seekerRoomName = roomName
    return this.save()
}

matchSchema.methods.look = async function() {
    let seekerLocation = await findRoomByName(this.seekerRoomName)
    return seekerLocation
}

matchSchema.methods.search = function(hidingSpot) {
    return (this.seekerRoomName === this.hiderRoomName)
        && (hidingSpot === this.hiderHidingSpot)
}

const Match = mongoose.model('Match', matchSchema)

function pickOneAtRandom(arrayOfThings) {
    return arrayOfThings[Math.floor(Math.random() * arrayOfThings.length)]
}

async function createMatch() {
    let allRooms = await listRooms()
    let hiderRoom = pickOneAtRandom(allRooms)
    let hiderRoomName = hiderRoom.name
    let hiderHidingSpot = pickOneAtRandom(hiderRoom.hidingSpots)
    let seekerRoomName = 'front entry'
    let newMatch = new Match({seekerRoomName, hiderRoomName, hiderHidingSpot})
    let createdMatch = await newMatch.save()
    console.log('Created match ', createdMatch.id)
    console.log('Don\'t tell the seeker, but the hider is ' + hiderHidingSpot + ' in the ' + hiderRoomName + '\n')
    return createdMatch
}

async function findById(id) {
    return Match.findById(id)
}

module.exports = {
    createMatch,
    findById
}
