import createElement from '../../assets/lib/create-element.js'

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.divHolder();
  }
  divCardTop() {
    let cardTop;
    let imgPath = this.product["image"];
    let priceSpan = this.product["price"];

    cardTop = createElement (`
      <div class="card__top">
          <img src="/assets/images/products/${imgPath}" class="card__image" alt="product">
          <span class="card__price">€${priceSpan.toFixed(2)}</span>
      </div>
    `);

    return cardTop;
  }
  divCardBody()  {
    let cardBody;
    let cardTitle = this.product["name"];
    let cardId = this.product["id"]
    
    cardBody = createElement (`
    <div class="card__body">
      <div class="card__title">${cardTitle}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    `)
    let butPlus = cardBody.querySelector( ".card__button" )
    let idSelect = cardBody.querySelector( ".card__title" )

    let event = new CustomEvent( "product-add", {
        detail: `${cardId}`,
        bubbles: true
    });

    butPlus.onclick = function () {
      butPlus.dispatchEvent(event)
      console.log(event)
    };
    return cardBody;
  }
  divCard() {
    let card 
    card = createElement(`
      <div class="card">
      </div>
    `);
    card.appendChild( this.divCardTop() );
    card.appendChild( this.divCardBody() );
    return card;
  }
  divHolder() {
    let holderCar;
    holderCar = createElement(`
    <div id="holder" class="container_half">
    </div>
    `);
   
    holderCar.appendChild( this.divCard() );

    return holderCar;
  }
}