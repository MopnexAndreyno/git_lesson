var addRecordButton = document.getElementById("btn1");
var removeRecordButton = document.getElementById("btn2");
var list = document.getElementById("list");
var records = document.getElementsByTagName("li");
var popup = document.getElementsByClassName("popup")[0];
var closePopupButton = document.getElementsByClassName("close")[0];

function addRecord() {
  var li = document.createElement("li")
  li.innerHTML = "Привет, мир!";
  li.className = "item";
  list.appendChild(li);
  closePopup();
}
function removeRecord() {
  list.removeChild(records[0]);

  if (records.length == 0)
    popup.style.display = "block";
}
function closePopup() {
  popup.style.display = "none";
}

addRecordButton.addEventListener("click", addRecord);
removeRecordButton.addEventListener("click", removeRecord);
closePopupButton.addEventListener("click", closePopup);