console.log(`It's Working !!!`);

$(document).ready(() => {
  $('.navbar a, footer a, .top a').on('click', function (event) {
    event.preventDefault();
    let hash = this.hash;
    $('body,html').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      () => {
        window.location.hash = hash;
      }
    );
  });
});
