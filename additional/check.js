var submitButton = document.getElementById("submit");

function checkUser() {
  var name = document.forms["check"].elements["name"].value;
  var age = document.forms["check"].elements["age"].value;
  var subscribe = document.forms["check"].elements["mailbox"].checked;

  if (name != "") {
    if (age >= 18) {
      if (subscribe == true)
      {
        alert("Добро пожаловать на сайт!");
        var accept = " авторизован.";
        var message = name + accept;
        console.log(message);
      } else {
        alert("Доступ запрещён! Вы не подписаны на рассылку.");
        var decline = " не авторизован";
        var message = name + decline;
        console.log(message);
      }
    } else {
      alert("Доступ запрещён! Вам меньше 18 лет.");
      var decline = " не авторизован";
      var message = name + decline;
      console.log(message);
    }
  } else {
    alert("Доступ запрещён! Введите своё имя.");
    console.log("Пользователь не автроизован.");
  }
}

submitButton.addEventListener("click", checkUser);