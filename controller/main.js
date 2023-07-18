const express = require('express')
const app = express()

const { getPlaylist } = require('../model/playlist');
const { getSong} = require('../model/playlist');
const { playSong } = require('../service/play');
const { showMostPlayed } = require('../service/show');

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 4100




app.get('/', (req, res) => {
  res.send("Sportfy playlist server coba coba, to add song send song details from body, use song /play/:index to get song link, use /show to get song list, use /show/:songId to get song details, and use /mostplayed to get most played song")
})

app.get('/show', (req, res) => {
    const playlist = getPlaylist()
    res.send(playlist)
})

app.get('/mostplayed', (req, res) => {
  const playlist = showMostPlayed()
  res.send(playlist)
})

app.get('/show/:index', (req, res) => {
  
  console.log(typeof(req.params.index))
  const song = getSong(req.params.index)
  console.log(typeof(song))
  res.send(song)
})


app.post('/',(req,res)=>{
    song.push(req.body)
    console.log(req.body)
    res.json(song)
})
 
app.get('/play/:index',(req,res) => {
    const song = playSong(req.params.index)
    res.send("Now Playing: " + song.title +" by "+ song.artist +" link "+ song.url)
    //res.json(song[req.params.index])
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app