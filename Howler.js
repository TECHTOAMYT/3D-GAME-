// Background music
var backgroundMusic = new Howl({
  src: ['assets/music/background.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5
});

// Sound effect on cube collision or key press
var soundEffect = new Howl({
  src: ['assets/sounds/click.mp3'],
  volume: 0.7
});

// Play sound when a key is pressed
document.addEventListener('keydown', function (event) {
    soundEffect.play();
});
