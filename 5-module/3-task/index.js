function initCarousel() {
  let caruselInner = document.querySelector(".carousel__inner");
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let slidesLen = 4;
  let position =  0;
  let slideSize = caruselInner.offsetWidth;
  arrowLeft.style.display = "none";

  
  let rightButton = (() => {
    position++;
    positionSlid(position);
    hidOrUnhid(position);
  });

  let leftButton = (() => {
    position--;
    positionSlid(position);
    hidOrUnhid(position);
  });
  
  const positionSlid = (position) => {
    let movePosition = -slideSize * position;
    caruselInner.style.transform = "translateX(" + `${movePosition}px)`;
  };

  const hidOrUnhid = (position) => {
    if (position >= (slidesLen-1)) {
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

  arrowRight.addEventListener("click", rightButton);
  arrowLeft.addEventListener("click", leftButton);
}
