// Insert 'WUB' before the first word and after the last one, also remove spaces

function songDecoder(song){
  return (song.replace(/(WUB)+/g," ").trim());
  
}