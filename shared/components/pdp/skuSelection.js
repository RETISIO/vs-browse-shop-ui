import React from 'react';

export default function SkuSelection() {
  return (
    <div className="sukproduct">
      <div className="sukhead"> Weight: </div>

      <div>
        <ul className="list-inline">
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">10 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">12 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">14 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">16 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">18 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">20 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">20 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>

          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">20 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>

          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">20 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>

          <li class="list-inline-item me-2 mb-2">
            <a class="tag" href="#">
              <span className="txttagb">20 OZ</span>
              <span className="txttaga">Approx</span>
              <span className="txttagz">z" Thick</span>
            </a>
          </li>
        </ul>

      </div>

      <div className="sukhead"> Count: </div>
      <div>
        <ul className="list-inline">
          <li class="list-inline-item me-2 mb-2">
            <a class="Count outstock" href="#">
              <span className="Countb">2 pcs</span>
              <span className="outoftocklab">Out of stock</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="Count" href="#">
              <span className="Countb">4 pcs</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="Count" href="#">
              <span className="Countb">6 pcs</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="Count" href="#">
              <span className="Countb">8 pcs</span>
            </a>
          </li>
          <li class="list-inline-item me-2 mb-2">
            <a class="Count" href="#">
              <span className="Countb">10 pcs</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="notifytxt"><a href="#">NOTIFY ME</a></div>


      { /* Desktop view  */}

      <div className="itempanel visible-lg ">
        <div className="itemtxt">ITEM CODE: <span>#99330 Desktop</span></div>

        <div className="prpanel">
          <span className="priceb">$159.00 </span>
          <span className="pricebstik">$259.00</span>
          <span className="pricenred">You save: $100.00</span>
        </div>

        <div className="">
          <div className="">
            <span className="panel1">
              <div class="input-group">
                <span class="input-group-btn">
                  <button class="btn js-counter__btn rd" type="button">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                </span>
                <input
                  data-bind="textInput: $data.quantity, event: { input: $parent.handleQuantityInputEvent }"
                  class="form-control js-counter__input brnone"
                  type="number"
                  min="0"
                  max="999"
                  maxlength="3"
                  onkeyup="if (event.srcElement.value.charAt(0) == '0') { event.srcElement.value = event.srcElement.value.slice(1); }"
                />
                <span class="input-group-btn">
                  <button class="btn js-counter__btn rdrt" type="button">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </span>
            <span className="sp-20"><button class="btn btn-secondary btn-md add-to-cart" id="0">ADD TO CART</button></span>
            <span><button class="btn btn-primary btn-md add-to-cart" id="1">ADD TO WISHLIST</button></span>
          </div>
        </div>
      </div>

      { /* Mobile view  */}

      <div className="itempanel visible-xs visible-sm visible-xs">
        <div className="itemtxt">ITEM CODE: <span>#99330 Mobile</span></div>

        <div className="prpanel">
          <span className="priceb col-xs-12 sp-30">$159.00 </span>
          <span className="pricebstik">$259.00</span>
          <span className="pricenred">You save: $100.00</span>
        </div>

        <div className="">
          <div className="">
            <div className="panel1mob col-xs-6">
              <div class="input-group">
                <span class="input-group-btn">
                  <button class="btn js-counter__btn rd" type="button">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                </span>
                <input
                  data-bind="textInput: $data.quantity, event: { input: $parent.handleQuantityInputEvent }"
                  class="form-control js-counter__input brnone"
                  type="number"
                  min="0"
                  max="999"
                  maxlength="3"
                  onkeyup="if (event.srcElement.value.charAt(0) == '0') { event.srcElement.value = event.srcElement.value.slice(1); }"
                />
                <span class="input-group-btn ">
                  <button class="btn js-counter__btn rdrt" type="button">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className="col-xs-6">
            <span className="sp-spc"><button class="btn btn-secondary btn-md add-to-cart" id="0">ADD TO CART</button></span>
            <span><button class="btn btn-primary btn-md add-to-cart" id="1">ADD TO WISHLIST</button></span>
            </div>
          </div>
        </div>
      </div>



    </div>

  )

}
