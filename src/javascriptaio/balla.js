const ball = document.getElementById('ball');
document.addEventListener('keydown', huyZnaetCho);
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keydown', SaandleKeyPress);
document.addEventListener('keydown', SoondleKeyPress);
let position = 0;
let huy =0;
function handleKeyPress(e) {
 if (e.code === 'ArrowLeft') {
  position = position - 5;
 }
 if (e.code === 'ArrowRight') {
  position = position + 5;
 }
 if (position < 0) {
  position = 0;
 }
 refresh();
}

function huyZnaetCho(k) {
 if (k.code === 'ArrowUp') {
  huy = huy - 5;
 }
 if (k.code === 'ArrowDown') {
  huy = huy + 5;
 }
 if (huy < 0) {
  huy = 0;
 }
 refuck();
}

function SoondleKeyPress(e) {
 if (e.code === 'ArrowLeft'+ 'ArrowUp') {
  position = position - 5;
  huy = huy -5;
 }
 if (e.code === 'ArrowRight' + 'ArrowDown') {
  position = position + 5;
  huy=huy+5;
 }
 if (position < 0) {
  position = 0;
 }
 if (huy < 0) {
  huy=0;
 }
 oosh();
}
function SaandleKeyPress(e) {
 if (e.code === 'ArrowLeft' + 'ArrowDown') {
  position = position - 5;
  huy = huy +5;
 }
 if (e.code === 'ArrowRight' + 'ArrowUp') {
  position = position + 5;
  huy=huy-5;
 }
 if (position < 0) {
  position = 0;
 }
 if (huy < 0) {
  huy=0;
 }
 aash();
}

function refresh() {
 ball.style.left = position + 'px';
}
function refuck() {
 ball.style.top = huy + 'px';
}

function oosh() {
 ball.style.left = position + 'px';
 ball.style.top = huy + 'px';
}
function aash() {
 ball.style.left = position + 'px';
 ball.style.top = huy + 'px';
}