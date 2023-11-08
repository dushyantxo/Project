const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const shuffleButton = document.querySelector('#shuffle');
let isShuffle = false;
let shuffledSongs = [];
// song titles
const songs = ['hey', 'summer', 'ukulele','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','48'];

// keep track of songs
let songIndex = 49;

// initially load song info DOM
loadSong(songs[songIndex]);

// update song details
function loadSong(song) {
  title.innerText = song;
  audio.src =  `static/music/${song}.mp3`;
  cover.src = `static/images/${song}.jpg`
}


// event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if(isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});


function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}


// change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
  songIndex--;

  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}


// logic for the progress bar
audio.addEventListener('timeupdate', updateProgress);


function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}



// Jumping to different parts in a song by clicking the progress bar
progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}


// Function to toggle shuffle mode
// Fisher-Yates shuffle function to shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to toggle shuffle mode
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleButton.style.color = isShuffle ? 'orange' : '#dfdbdf';

  if (isShuffle) {
    // Shuffle the songs array and store it in shuffledSongs
    shuffledSongs = shuffleArray([...songs]); // Use a copy of the original songs array
  } else {
    // Clear shuffledSongs to revert to the original song order
    shuffledSongs = [];
  }

  songIndex = 0; // Reset song index
  loadSong(isShuffle ? shuffledSongs[songIndex] : songs[songIndex]);
  playSong();
}
function playNext() {
  if (isShuffle) {
    // If in shuffle mode, play the next shuffled song
    songIndex++;
    if (songIndex >= shuffledSongs.length) {
      // If we've reached the end of the shuffled list, start over
      songIndex = 0;
      shuffledSongs = shuffleArray([...songs]); // Reshuffle the songs
    }
    loadSong(shuffledSongs[songIndex]);
  } else {
    // If not in shuffle mode, play the next song in the original order
    songIndex++;
    if (songIndex >= songs.length) {
      // If we've reached the end of the original list, start over
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
  }
  playSong();
}


// Add a click event listener for the shuffle button
shuffleButton.addEventListener('click', toggleShuffle);

// event for when song finishes
audio.addEventListener('ended', nextSong);
