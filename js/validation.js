const pattern = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})$/;

$(document).ready(function () {
  $(".js-form").on("submit", function () {
    const emailStr = $(".js-form-email").val();

    if (pattern.test(emailStr) == false) {
      alert("Введите корректный e-mail");
      return false;
    }
  });
});
