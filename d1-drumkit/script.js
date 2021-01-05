//TODO:
//Random Drum Trigger Headers!
//Drum Kit Swapper!
//gradient animation on drum pads
//Header fills with volume level

const titleAdLibs = ["Boom Boom Bap!", "Pew Pew Pew!", "All About Dat Bass!", "Hot Damn!", "Fire Beats Over Here!", "Check Out My Soundcloud!", "It's a Function Stack Yo!", "Skrrt Skrrt!", "Rip This Off Will.I.Am!", "Damn You!"];

function selectRandomAdLib() {
  return titleAdLibs[(Math.floor(Math.random() * 10))]
}

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pad = document.querySelector(`.drumpad[data-key="${e.keyCode}"]`);
  const header = document.querySelector(`header h1`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  header.textContent = selectRandomAdLib();
  pad.classList.add('playing');

});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const kitButtons = document.querySelectorAll('input');
const audioElements = document.querySelectorAll('audio');
const pads = document.querySelectorAll(`.drumpad`);
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));
//Surgically alters sample directory
function switchPath(oldpath, val) {
  let newpath = oldpath.replace(/kit[A-C]/, `kit${val}`);
  return newpath;
}

//Reassigns drum sample kits
kitButtons.forEach( (el) => {
  el.onclick = (e) => {
    const val = e.target.value;
    
    audioElements.forEach( function(audioElmnt) {
      let oldpath = audioElmnt.getAttribute("src");
      audioElmnt.setAttribute("src", switchPath(oldpath, val));
      
    })
  }
});