function solve(bandName, albumName, songName) {
  const fullRotation = 2.5;
  let songDuration = (albumName.length  * bandName.length ) * songName.length / 2
  let rotations = Math.ceil(songDuration / fullRotation);
  
  console.log(`The plate was rotated ${rotations} times.`)
}

solve('Black Sabbath', 'Paranoid',
'War Pigs')