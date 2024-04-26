"use strict";
function make_album(artist_name, album_name, tracks) {
    let album = { artist: artist_name, title: album_name };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("unknown_person1", "unknown_album1");
console.log(album1);
let album2 = make_album("unknown_person2", "unknown_album2");
console.log(album2);
let album3 = make_album("unknown_person3", "unknown_album3", 3);
console.log(album3);
