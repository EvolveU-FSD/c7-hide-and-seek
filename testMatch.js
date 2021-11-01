let Match = require('./model/match')

async function main() {
    let match = await Match.createMatch()
    console.log('createMatch returned with', match)
    let room = await match.look()
    console.log('The seeker sees', room)
    await match.move('bathroom')
    console.log('The seeker moved to', await match.look())
    let found = await match.search('in the shower')
    console.log('Checked the shower and ', found)
}

main()

