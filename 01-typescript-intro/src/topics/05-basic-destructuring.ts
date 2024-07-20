 

 interface AudioPlayer{
    audioVolumne:number;
    songDuration:number;
    song:string;
    details:Details;
 }

 interface Details{
    author:string;
    year:number;
 }

 const audioPlayer:AudioPlayer={
     audioVolumne: 90,
     songDuration: 36,
     song: "Mess",
     details:{
        author:'Ed Sheeran',
        year:2015
     }
 }

 const song='New Song'

//  const {song:anotherSong, songDuration:duration,details}=audioPlayer;
// const {author, year}=details;


//  console.log('Song: ',anotherSong);
//  console.log('Duration: ',duration);
//  console.log('Author: ',author);
//  console.log('Year: ',year);


const [p1,p2,trunks='Not found']=['Goku','Vegeta','Trunks'];
// const trunks=dbz[3]||'No hay personaje';


console.log('Personake 3: ',trunks)