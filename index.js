
function Calculate() {
  var total = document.querySelector ("#total");
  var singlebill = document.querySelector ("#singlebill");
  var bill = document.querySelector ("#bill").value;
  var people = document.querySelector ("#people").value;
  var select = document.querySelector ("select");
  var selectOptions = select.options[select.selectedIndex].value;
  var mathsAnswer;
  var totalAmount;


  if (selectOptions == "thirty") {
    mathsAnswer = (bill * 1.3) / people;
    totalAmount = bill * 1.3;
  }
  else if (selectOptions == "twenty") {
    mathsAnswer = (bill * 1.2) / people;
    totalAmount = bill * 1.2;
  }
  else if (selectOptions == "ten") {
    mathsAnswer = (bill * 1.1) / people;
    totalAmount = bill * 1.1;
  }
  else if (selectOptions == "five") {
    mathsAnswer = (bill * 1.05) / people;
    totalAmount = bill * 1.05;
  }
  else if (selectOptions == "zero") {
    mathsAnswer = bill / people;
    totalAmount = bill;
  }
  else {
    mathsAnswer = "invalid answer";
    totalAmount = "invalid answer";
  }

  singlebill.value = mathsAnswer;
  total.value = totalAmount;
}
