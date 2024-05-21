const pics = [
  `<article class="product__slides">
        <h3 class="slide-header">For Hamsters</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/humster-pic.png" alt="Humster photo">
        <p class="subtitle-text">Food • Soft &amp; Chewy Treats • Litter • Furniture • Collars and Leashes • Bowls • Toys • Beds •&nbsp;</p>
    </article>`,
  `<article class="product__slides">
        <h3 class="slide-header">For Cats</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/cat-pic.png" alt="Cat photo">
        <p class="subtitle-text">Dry Food • Wet Food • Treats • Catnip &amp; Grass • Litter Boxes  • Bowls &amp; Feeders • Toys • Beds  •&nbsp;</p>
    </article>`,
  `<article class="product__slides">
        <h3 class="slide-header">For Dogs</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/dog-pic.png" alt="Dog photo">
        <p class="subtitle-text">Dry &amp; Canned Food • Jerky • Chewy Treats • Bowls • Toys • Collars and Leashes • Clothes •</p>
    </article>`,
  `<article class="product__slides">
        <h3 class="slide-header">For Parrots</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/parrot-pic.png" alt="Parrot photo">
        <p class="subtitle-text">Food • Treats • Cages &amp; Stands • Vitamins • Bowls &amp; Feeders • Litter &amp; Nesting • Odor Control •</p>
    </article>`,
  `<article class="product__slides">
        <h3 class="slide-header">For Rabbits</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/rabbit-pic.png" alt="Rabbit photo">
        <p class="subtitle-text">Food • Treats • Hay • Cages • Litter &amp; Bedding • Harnesses • Toys • Odor Removers •&nbsp;</p>
    </article>`,
  `<article class="product__slides">
        <h3 class="slide-header">For Fish</h3>
        <img class="carrousel__slide" src="img/food-stuff-products/fish-pic.png" alt="Fish photo">
        <p class="subtitle-text">Food • Feeders • Aquariums • Filters &amp; Pumps • Cleaning  • Water Care • Decor •</p>
    </article>`,
];

let curSlideId = 0;
let slidesToShow = 2;

function calculateSlidesToShow() {
  if (window.innerWidth >= 980) {
    slidesToShow = 4;
  } else if (window.innerWidth >= 768) {
    slidesToShow = 3;
  } else {
    slidesToShow = 2;
  }
}

function renderSlide() {
  const slideContainer = document.querySelector(`.swiper-pic`);
  slideContainer.innerHTML = "";
  const slidesToShow = window.matchMedia("(min-width: 980px)").matches
    ? 4
    : window.matchMedia("(min-width: 768px)").matches
    ? 3
    : 2;

  for (let i = 0; i < slidesToShow; i++) {
    let slideId = (curSlideId + i) % pics.length;
    slideContainer.innerHTML += pics[slideId];
  }
}

function nextSlide() {
  curSlideId = (curSlideId + 1) % pics.length;
  renderSlide();
}

function prevSlide() {
  curSlideId = curSlideId - 1 < 0 ? pics.length - 1 : curSlideId - 1;
  renderSlide();
}

window.addEventListener("resize", renderSlide);
renderSlide();

const btnNext = document.querySelector(".next-arrow");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".prev-arrow");
btnPrev.addEventListener("click", prevSlide);
