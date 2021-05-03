
var index = 4;
function next() {
  var selectedName = document.getElementsByClassName("selected");
  selectedName[0].classList.remove("selected");

  index += 4;
  var tds = document.getElementsByTagName("td");
  console.log(tds);

  tds[index].classList.add("selected");

  // pobierz dane z tabelki i wrzuć do div

  //  TUTAJ

  /////////////////////////////



  console.log(index);
  console.log(tds.length);
  if (index == tds.length - 4) {
    var button = document.getElementById("buttonNext");
    button.disabled = true;
  }
}
