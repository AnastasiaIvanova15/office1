window.onload = () => {
    let login_btn = document.querySelector(".profile");
    let to_auth = document.querySelector(".to-auth");
    let to_reg = document.querySelector(".to-reg");
    let popup_reg = document.querySelector(".popup-reg");
    let close_reg = document.querySelector(".close-reg");
    let popup_auth = document.querySelector(".popup-auth");
    let close_auth = document.querySelector(".close-auth");

    login_btn.onclick = () => {
        popup_reg.classList.remove("hidden");
    };
    close_reg.onclick = () => {
        popup_reg.classList.add("hidden");
    };
    close_auth.onclick = () => {
        popup_auth.classList.add("hidden");
    };
    to_reg.onclick = () => {
        popup_reg.classList.remove("hidden");
        popup_auth.classList.add("hidden");
    }
    to_auth.onclick = () => {
        popup_reg.classList.add("hidden");
        popup_auth.classList.remove("hidden");
    }
};


// Получаем поле ввода по id
let input = document.getElementById("phone");

// Создаём маску для ввода телефона
input.addEventListener("input", function () {
  let phone = this.value.replace(/\D/g, ""); // Удаляем все символы, кроме цифр
  phone = phone.substring(0, 11); // Ограничиваем длину номера телефона
  let formattedPhone = "";
  if (phone.length > 0) {
    formattedPhone = "(" + phone.substring(0, 3);
  }
  if (phone.length > 3) {
    formattedPhone += ") " + phone.substring(3, 6);
  }
  if (phone.length > 6) {
    formattedPhone += "-" + phone.substring(6, 8);
  }
  if (phone.length > 8) {
    formattedPhone += "-" + phone.substring(8, 10);
  }
  this.value = formattedPhone;
});
