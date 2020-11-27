let musicArray = [];
let musicName = document.getElementById("musicName");
let musicSignger = document.getElementById("musicSignger");
let musicCover = document.getElementById("musicCover");
let musicController = document.getElementById("musicController");


fetch("../data.json")
.then( res => res.json())
.then(data => {
    let i = 1;

    data.forEach( music => {

      musicArray.push(music);
      
        let musicHtml = `
             <div class="listItem" data-musicId ="${music.musicId}" >
            <h1>${i++}</h1>
            <img src="${music.photoUrl}" width="40px" height="40px" alt="">
            <span class="name"><strong>${music.name}</strong> </span>
            <span> ${music.category}</span>
            <span> ${music.lenght}</span>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
        `;


    document
      .getElementById("playList")
      .insertAdjacentHTML("beforeend", musicHtml);

    });

    let musicElements = document.querySelectorAll(".listItem");
    musicElements.forEach(element => {
      element.addEventListener("click",playSong);

    })
});

function playSong(){
  let searchMusicId = this.dataset.musicid;
  let searchedMusic  = musicArray.find((music) => music.musicId == searchMusicId);
  musicName.innerText = searchedMusic.name 
  musicSignger.innerText = searchedMusic.singer
  musicCover.src = searchedMusic.photoUrl;
  musicController.src = searchedMusic.Mp3Url;
}