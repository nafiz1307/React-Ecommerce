import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({basket.length} items): */}
              Subtotal (0 items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="btn waves-effect waves-light proceed">
        Proceed to Checkout
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
}

export default Subtotal