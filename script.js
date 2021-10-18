let myText = document.getElementById("textEntered");
let caseVariable;
function pdfText() {
  let pdf = new jsPDF("p", "pt", "letter");
  pdf.canvas.height = 72 * 11;
  pdf.canvas.width = 72 * 8.5;
  let mytext = $("#textEntered").val();
  pdf.fromHTML(mytext);
  pdf.save("yourNewText.pdf");
}
function capitalizeText() {
  let textEntered = document.getElementById("textEntered").value;
  $("#textEntered").addClass("captalize");
}
function upperCaseText() {
  let textEntered = document.getElementById("textEntered").value;
  myText.value = textEntered.toUpperCase();
  $("#textEntered").removeClass("captalize");
  caseVariable = true;
}
function lowerCaseText() {
  let textEntered = document.getElementById("textEntered").value;
  myText.value = textEntered.toLowerCase();
  $("#textEntered").removeClass("captalize");
  caseVariable = false;
}
function spaceRemover() {
  let textEntered = document.getElementById("textEntered").value;
  textEntered = textEntered.replace(/\s{2,}/g, " ").trim();
  myText.value = textEntered;
}
let italic;
function italicText() {
  italic = !italic;
  if (italic) {
    let textEntered = document.getElementById("textEntered").value;
    $("#textEntered").addClass("italic");
  } else {
    let textEntered = document.getElementById("textEntered").value;
    $("#textEntered").removeClass("italic");
  }
}
$(".speak").on("click", function (e) {
  e.preventDefault();
  let textEntered = document.getElementById("textEntered").value;
  var msg = new SpeechSynthesisUtterance();
  msg.text = textEntered;
  window.speechSynthesis.speak(msg);
});
function invertText() {
  let textEntered = document.getElementById("textEntered").value;
  if (caseVariable) myText.value = textEntered.toLowerCase();
  else myText.value = textEntered.toUpperCase();
}
function copyText() {
  myText.select();
  navigator.clipboard.writeText(myText.value);
}
function clearText() {
  myText.value = " ";
}
let words = 0;
function counter() {
  let textEntered = document.getElementById("textEntered").value;
  words = textEntered.match(/(\w+)/g).length;
  $(".wordsNum").text(words);
  $(".charNum").text(textEntered.length);
}
$(".sun,.moon").on("click", function () {
  $("body").toggleClass("bg_light");
  $(".container").toggleClass("bg_black");
  $("textarea , .amount , .people , .box").toggleClass("bg_light");
  $(".sun").toggleClass("hide");
  $(".moon").toggleClass("show");
  $("button").toggleClass("bg_btn");
});
let reverse;
function characterReverse() {
  reverse = !reverse;
  if(reverse){
    let textEntered = document.getElementById("textEntered").value;
    myText.value = "";
    for (var i = textEntered.length - 1; i >= 0; i--) {
      myText.value += textEntered[i];
    }
  }
  else{
    let textEntered = document.getElementById("textEntered").value;
    myText.value = "";
    for (var i = 0; i <= textEntered.length - 1; i++) {
      myText.value += textEntered[i];
  } 
}
}
function download(file, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
  );
  element.setAttribute("download", file);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
document.getElementById("dnld").addEventListener(
  "click",
  function () {
    var text = document.getElementById("textEntered").value;
    var filename = "newText.txt";
    download(filename, text);
  },
  false
);
let amount = (range = 0);
let people = 1;
$(".range").on("change", () => {
  range = $(".range").val();
  $(".cntg").text(range);
});
$(".people").on("change", () => {
  people = $(".people").val();
  $(".ppl").text(people);
});
$(".amount").on("change", () => {
  amount = $(".amount").val();
  $(".bill").text(amount);
});
$(".calBtn").on("click", () => {
  let percent = (parseInt(amount) * parseInt(range)) / 100;
  percent = parseInt(percent) * parseInt(people);
  let totalBill = parseInt(amount) + parseInt(percent);
  $(".total").text(totalBill);
  $(".tip").text(percent);
});
//percentatge calculator
let xVal = (yVal = pAge = 0);
function showPercentage() {
  xVal = $(".fValue").val();
  yVal = $(".sValue").val();
  pAge = (parseInt(xVal) / parseInt(yVal)) * 100;
  console.log(pAge);
  $(".xValue").text(xVal);
  $(".yValue").text(yVal);
  $(".bothPrcntg").text(pAge.toFixed(2));
}
let pVal = (tVal = pvalue = 0);
function showPercentageValue() {
  pVal = $(".pValue").val();
  yVal = $(".ttlValue").val();
  let calc = parseInt(pVal) * parseInt(yVal);
  let percentatge_val = parseInt(calc) / 100;
  $(".value").text(pVal);
  $(".ttl").text(yVal);
  $(".prcntage").text(percentatge_val.toFixed(2));
}
//color picker
let colorInp = document.getElementById("clrPicker");
let hexCode = document.getElementById("hexCode");
colorInp.addEventListener("input", () => {
  let color = colorInp.value;
  hexCode.value = color;
});
function copyCode() {
  hexCode.select();
  navigator.clipboard.writeText(hexCode.value);
}

//gradient maker
let colorOne = document.getElementById('clrOne');
let colorTwo = document.getElementById('clrTwo');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('setGrad');
function setDirection(value, _this){
  let allDirections = document.querySelectorAll('.buttons button');
  for(let i of allDirections){
    i.classList.remove('bgBlu');
  }
  _this.classList.add('bgBlu');
  currentDirection = value;
}
function generateCode(){
  outputCode.value = `background-image : linear-gradient(${currentDirection} , ${colorOne.value} , ${colorTwo.value});`;
  $(".bg_grd").css("background" , `linear-gradient(${currentDirection} , ${colorOne.value} , ${colorTwo.value})` )
}
function copyGrdCode(){
  let codeCopy = document.getElementById('setGrad');
  codeCopy.select();
  navigator.clipboard.writeText(codeCopy.value);
}