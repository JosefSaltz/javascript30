const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log(💩);
// Interpolated
console.log('Hello I am a %s string!', 'dicks');
// Styled
console.log('%c I am some great text', 'font-size: 50px; color: red;');
// warning!
console.warn("Hold up!")
// Error :|
console.error("Shit!")
// Info
console.info("Dogs only now")
// Testing
const p =document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'that is wrong!')
// clearing
console.clear();
// Viewing DOM Elements
console.dir(span) //Will show more details on a specific element
// Grouping together
const arr = ['Some', 'Strings', 'In', 'This', 'array']
arr.forEach(el => {
  console.groupCollapsed(`${el}`);
  console.groupEnd(el);
})
// counting
console.count()
// timing
console.time('Start fetching data');
fetch('localhost')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data)
});

console.table();