$(document).ready(() => {
  $(".catalog__sorter-arrow").on("click", (event) => {
    const decrease = $(event.currentTarget).hasClass("decrease");

    if (decrease) {
      $(event.currentTarget).removeClass("decrease");
    } else {
      $(event.currentTarget).addClass("decrease");
    }

    const sortField = $(event.currentTarget).data("sort-field");

    const cards = $(".catalog__cards .card");
    const cardsSorted = cards.sort(function (a, b) {
      return decrease
        ? parseInt(a.dataset[sortField]) - parseInt(b.dataset[sortField])
        : parseInt(b.dataset[sortField]) - parseInt(a.dataset[sortField]);
    });
    cardsSorted.appendTo(".catalog__cards");
  });
});
