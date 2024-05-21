function init() {
  import("./swiper.js");
  import("./common.header-nav.js");
  import("./burger-button.js");
  import("./index.footer.coolOwners.js");
  import("./index.modal.register.partial.js");
  // import("./index.coolgame.partial.js").then((module) => {
  //   module.initializeGame();
  // });
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    init();
  }
});
