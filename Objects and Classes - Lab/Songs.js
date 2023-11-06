function solve(arr) {
  const numberSongs = arr.shift();
  const typeList = arr.pop();
  let songs = [];

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let song of arr) {
    let [typeList, name, time] = song.split("_");

    const newSong = new Song(typeList, name, time);
    songs.push(newSong);
  }

  for (const song of songs) {
    if (song.typeList == typeList || typeList == "all") {
      console.log(song.name);
    }
  }
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
