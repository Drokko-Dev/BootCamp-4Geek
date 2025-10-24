let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function randomNumber(array) {
  let largo = array.length;
  let randomNumber = Math.floor(Math.random() * largo);
  return randomNumber;
}

function generateExcuse() {
  let who_ = randomNumber(who);
  let action_ = randomNumber(action);
  let what_ = randomNumber(what);
  let when_ = randomNumber(when);
  console.log([who_, action_, what_, when_]);

  return `${who[who_]} ${action[action_]} ${what[what_]} ${when[when_]}`;
}

let excusa = generateExcuse();

document.getElementById("excuse").innerHTML = excusa;

console.log(excusa);
