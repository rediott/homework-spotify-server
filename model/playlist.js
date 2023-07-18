let playlist = [
    {
        title : "Kings & Queens",
        artist: ["30 Second to Mars"],
        url: 'https://open.spotify.com/track/4sjLcE0GQ6urc4iUXsUPe9?si=5fa9a43f089a4922',
        playing : false,
        count : 6
    },
    {
        title : "Thnks fr th Mmrs",
        artist: ["Fall Out Boy"],
        url: 'https://open.spotify.com/track/3Zwu2K0Qa5sT6teCCHPShP?si=e7bcb80b0d2240a2',
        playing : false,
        count : 8
    },
    {
        title : "Burn it Down",
        artist: ["Linkin Park"],
        url: 'https://open.spotify.com/track/7oVEtyuv9NBmnytsCIsY5I?si=96f1e8db518a4902',
        playing : false,
        count : 9
    }

]

function getPlaylist(){
    return playlist
}

function getSong(songId){
    const index = songId.substring(1)
    return playlist[parseInt(index)]
}

module.exports = {
    getPlaylist,
    getSong
  };
    