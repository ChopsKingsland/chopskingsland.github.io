const token =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkRNMk02MlBMUTgifQ.eyJpc3MiOiJGWTk5WlQ2UURIIiwiaWF0IjoxNjQwMzYxMjUyLCJleHAiOjE2NDA0NDc2NTJ9.7nQ7PcqDUmKmVdi_NDUFEGmPXCHMRSrBBwN3TI0JrU-2_yLv2q7H4VX6jf_eivUc4xm8rIAEDlLOeYdvFowTJQ";

document.addEventListener("musickitloaded", function () {
  // MusicKit global is now defined
  MusicKit.configure({
    developerToken: token,
    app: {
      name: "My Cool Web App",
      build: "1.0.0",
    },
  });
});

let music = MusicKit.getInstance();

// music
//   .authorize()
//   .then(function (token) {
//     // do something with token here
//     // window.location.href += "?music-user-token=" + encodeURIComponent(token);
//     console.log("authorized")
//   })
//   .catch((e) => {
//     console.log("Error:" + e);
//   });

// music.player.play();

function addToUL(item, index) {
  var ul = document.getElementById("playlists");
  var li = document.createElement("li");

  const meHTML = `${item.attributes.name} - <a href="javascript:queue('${item.id}');">Queue</a>`

  // li.appendChild(document.createTextNode(item.attributes.name));
  li.innerHTML = meHTML;
  ul.appendChild(li);
}

async function getPlaylists() {
  const playlists = await music.api.library.playlists(null);
  console.log(playlists);

  playlists.forEach(addToUL);

  // const randomIndex = Math.floor(Math.random() * playlists.length);
  // // pick random playlist
  // const playlistId = playlists[0].id;
  // console.log(playlistId);
  // // set playback queue
  // await music
  //   .setQueue({
  //     playlist: playlistId,
  //   })
  //   .then(function () {
  //     console.log("setting queue");
  //     // start playing (playing audio usually requires user interaction)
  //     music.player.play();
  //     console.log("playing");
  //   });
}

getPlaylists();

function queue(plyID) {
  // let music = MusicKit.getInstance();
  music.authorize().then(function() {
      music.setQueue({
            playlist: plyID
      }).then(function() {
            music.play();
      }
  )})
}

// let music = MusicKit.getInstance();
// music.authorize().then(function() {
//      music.setQueue({
//           playlist: 'p.gek1RX1tLYYk503'
//      }).then(function() {
//           music.play();
//      }
// )})
