

function input(value){
    document.getElementById("display").textContent += str = value;
}

function input_Arith(value){
    return value;
}

function allClear(){
    document.getElementById("display").textContent = "";
}

function answer(){
  var formula = document.getElementById("display").textContent;
  var answer = eval(formula);
  document.getElementById("display").textContent = answer;
}
