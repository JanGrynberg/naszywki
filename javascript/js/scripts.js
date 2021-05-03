console.log("Witaj.");

var age = 18;

// instrukcje wyboru
if (age >= 18) {
  console.log("Pełnoletni.");
} else {
  console.log("Niepełnoletni.");
}

var month = 3;
switch (month) {
  case 1:
    console.log("Styczeń");
    break;
  case 2:
    console.log("Luty");
    break;
  case 3:
    console.log("Marzec");
    break;
  default:
    console.log("Brak.");

}

// intrukcje iteracyjne
var i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

for (var i = 0; i < 100; i++) {
  console.log(i);
}

var names = ["Szymon", "Jurek", "Czarek"];
names[0] = "Franek";
for (var name of names) {
  console.log(name);
}

names.push("Jurek")

/*
XML

<books>
  <book>
    <name>Tytuł 1</name>
    <author>Jurek</author>
  </book>
  <book>
    <name>Tytuł 2</name>
    <author>Czarek</author>
  </book>
  <book>
    <name>Tytuł 3</name>
    <author>Marek</author>
  </book>
</books>

JSON
[
  {
    name:"Tytuł 1",
    author:"Jurek"
  },
  {
    name:"Tytuł 2",
    author:"Czarek"
  },
  {
    name:"Tytuł 3",
    author:"Marek"
 }
]

*/

// obiekty
var person = {
  name: "Anna",
  age: 22
};

console.log(person.name);
console.log(person.age);

console.log(person);

var number;
console.log(number);

var number = null;
console.log(number);

person = 5;
console.log(person);

var books = ["Jurek", 22, {
  street: "Zielona",
  number: 10
}];
console.log(books);

console.log(sum(5, 5));
console.log(books[0]);
console.log(books[1].street);
console.log(books[2].street);

/* functions */
function sum(a, b) {
  return a + b;
}

var sum = function(a, b) {
  return a + b;
}


console.log(sum(2, 2));

/******** DOM **********/
window.addEventListener('load', (event) => {
  console.log(document);

  // var title1 = document.getElementById("title2");
  // console.log(title1);
  // title1.style.backgroundColor = "red";
  // title1.style.display = "none";


});

var bookIndex = 0;

function next() {
  var books = document.getElementsByClassName("book");
  document.getElementById("buttonPrev").disabled = false;

  books[bookIndex].style.display = "none";
  books[++bookIndex].style.display = "block";

  if (bookIndex == books.length - 1) {
    var button = document.getElementById("buttonNext");
    console.log(button);
    button.disabled = true;
  }
}

function prev() {
  var books = document.getElementsByClassName("book");
  document.getElementById("buttonNext").disabled = false;

  books[bookIndex].style.display = "none";
  books[--bookIndex].style.display = "block";

  if (bookIndex == 0) {
    var button = document.getElementById("buttonPrev");
    console.log(button);
    button.disabled = true;
  }
}
