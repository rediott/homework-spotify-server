const { getPlaylist } = require('../model/playlist');
//const { getSong} = require('../model/playlist');

function showMostPlayed(){
    const playlist = getPlaylist()
    return playlist.sort((p1, p2) => (p1.count < p2.count) ? 1 : (p1.count > p2.count ? -1 : 0))
}

module.exports = {
    showMostPlayed
  };
    