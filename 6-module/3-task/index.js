import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.inner;
    this.maxslid;
    this.carousel;
    this.elem = this.slideCreat();
  }
  slideCreat() {
    const carousel = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
      <div class="carousel__inner">
  
      </div>;
    </div>`)

    let carIn = carousel.querySelector(".carousel__inner");
    let slideNum = 0;

    for (let elem of this.slides) {
      let id = elem["id"];
      let price = Number(elem["price"]);
      let image = elem["image"];
      let title = elem["name"];
      
      let carouseLSlide = createElement(`
      <div class="carousel__slide" data-id=${id}>
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${price.toFixed(2)}</span>
          <div class="carousel__title">${title}</div>
        </div>
      </div>
      `);

      let carCap = carouseLSlide.querySelector(".carousel__caption");
      let detailInfo = carouseLSlide.getAttribute("data-id"); 
      
      let buttonPlus = createElement(`
      <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
      `);
      
      let event = new CustomEvent("product-add", {
        detail: detailInfo,
        bubbles: true
      })
      buttonPlus.onclick = function () {
          buttonPlus.dispatchEvent( event );
      }
      carCap.appendChild (buttonPlus );
      carIn.appendChild( carouseLSlide );
      slideNum++;
    }
    this.inner = carIn;
    this.carousel = carousel;
    this.maxslid = slideNum;
    this.buttonManip();
    return carousel;  
  }
  buttonManip() {
    let carousel = this.carousel;
    let caruselInner = this.inner;
    let arrowRight = carousel.querySelector( ".carousel__arrow_right" );
    let arrowLeft = carousel.querySelector( ".carousel__arrow_left" );
    let slideSize = 500;
    arrowLeft.style.display = "none";
    let position = 0;
    let slidVisual = this.maxslid;

    let rightButton = (() => {
      position++;
      positionSlid( position );
      hidOrUnhid( position );
    });
  
    let leftButton = (() => {
      position--;
      positionSlid( position );
      hidOrUnhid( position );
    });
    
    const positionSlid = ( position ) => {
      let movePosition = -slideSize * position;
      caruselInner.style.transform = "translateX(" + `${movePosition}px)`
    };
  
    const hidOrUnhid = (position) => {
      if (position >= (slidVisual-1)) {
        arrowRight.style.display = "none";
      }  else {
        arrowRight.style.display = "";
      }
      if (position <= 0) {
        arrowLeft.style.display = "none";
      } else {
        arrowLeft.style.display = "";
      }
    };
  
    arrowRight.addEventListener( "click", rightButton );
    arrowLeft.addEventListener( "click", leftButton );
  }
}