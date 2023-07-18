//const { getPlaylist } = require('../model/playlist');
const { getSong} = require('../model/playlist');

function playSong(index){
    const song = getSong(index)
    song.count += 1
    song.playing = true
    return song
}

module.exports = {
    playSong
  };
    