$(document).ready(() => {
  $(".js-like").on("click", (event) => {
    if ($(event.currentTarget).hasClass("active")) {
      $(event.currentTarget).removeClass("active");
      alert("Удалено из избраное");
    } else {
      $(event.currentTarget).addClass("active");
      alert("Добавлено в избраное");
    }
  });
});
