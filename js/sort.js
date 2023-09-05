$(document).ready(() => {
  $(".catalog__sorter-box").on("click", (event) => {
    const decrease = $(event.currentTarget).hasClass("decrease");
    console.log("decrease: ", decrease);

    // decrease направление стрелочки
    if (decrease) {
      $(event.currentTarget).removeClass("decrease");
    } else {
      $(event.currentTarget).addClass("decrease");
    }

    const sortField = $(event.currentTarget).data("sort-field");
    //sort-field что сортируем
    const cards = $(".catalog__cards .card");
    // cards список карточек для сортировки
    const cardsSorted = cards.sort(function (a, b) {
      // a.dataset[sortField] - значения цена для сортировки
      return decrease
        ? parseInt(a.dataset[sortField]) - parseInt(b.dataset[sortField])
        : parseInt(b.dataset[sortField]) - parseInt(a.dataset[sortField]);
    });
    cardsSorted.appendTo(".catalog__cards");
   // cardsSorted список дивово карточек отсортированных

  });
});
