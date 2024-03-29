const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
};

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
};

function handleBackward() {
    $video.currentTime = $video.currentTime - 10
    console.log("Para atrás 10 segundos", $video.currentTime)
};

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    console.log("Para adelante 10 segundos", $video.currentTime)
};

function handleLoaded() {
    $progress.max = $video.duration;
    console.log("Ha cargado mi video", $video.duration)
};

function handleTimeUpdate () {
    $progress.value = $video.currentTime;
};

function handleInput () {
    $video.currentTime = $progress.value;
    console.log($progress.value)
}