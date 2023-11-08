'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "static/images/poster-1.jpg",
    posterUrl: "static/images/poster-1.jpg",
    title: "BLUE moon",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/music-1.mp3",
  },
  {
    backgroundImage: "static/images/poster-2.jpg",
    posterUrl: "static/images/poster-2.jpg",
    title: "We Are Going To Be Ok (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Jhove",
    musicPath: "static/music/music-2.mp3",
  },
  {
    backgroundImage: "static/images/poster-3.jpg",
    posterUrl: "static/images/poster-3.jpg",
    title: "Winter Meadow",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/music-3.mp3",
  },
  {
    backgroundImage: "static/images/poster-4.jpg",
    posterUrl: "static/images/poster-4.jpg",
    title: "From Where We Started",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/music-4.mp3",
  },
   {
    backgroundImage: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    posterUrl: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/ukulele.mp3",
  },
   {
    backgroundImage: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    posterUrl: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    title: "Old owl",
    album: "SHE slash her",
    year: 2022,
    artist: "Xo",
    musicPath: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
  },
  {
    backgroundImage: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    posterUrl: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    title: "Old rouyale",
    album: "SHE slash her",
    year: 2022,
    artist: "Xo ",
    musicPath: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
  {
    backgroundImage: "static/images/poster-5.jpg",
    posterUrl: "static/images/poster-5.jpg",
    title: "Where I Found You",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/music-5.mp3",
  },
  {
    backgroundImage: "static/images/Untitled.jpeg",
    posterUrl: "static/images/Untitled.jpeg",
    title: "Termux backend",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/happyrock.mp3",
  },
  {
    backgroundImage: "static/images/1.jpeg",
    posterUrl: "static/images/1.jpeg",
    title: "Mountain monk",
    album: "No Spirit",
    year: 2022,
    artist: "XO",
    musicPath: "static/music/acousticbreeze.mp3",
  },
  {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/1.mp3",
  },
   {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/2.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/3.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/4.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/5.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/6.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/7.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/8.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/9.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/10.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/11.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/12.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/13.mp3",
  },
   {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/14.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/15.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/16.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/17.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/18.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/19.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/20.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/21.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/22.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/23.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/24.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/25.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/26.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/27.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/28.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/29.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/30.mp3",
  },
   {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/31.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/32.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/33.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/34.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/35.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/36.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/37.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/38.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/39.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/40.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/41.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/42.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/43.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/44.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/45.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/46.mp3",
  }, {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/47.mp3",
  },
   {
    backgroundImage: "static/images/gvv.jpg",
    posterUrl: "static/images/gvv.jpg",
    title: "Project ",
    album: "Random variables",
    year: 2022,
    artist: "Classmate",
    musicPath: "static/music/48.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
