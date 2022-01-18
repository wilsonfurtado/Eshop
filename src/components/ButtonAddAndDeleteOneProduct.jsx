import React from "react"

const ButtonAddAndDeleteOneProduct = function ({
  product,
  addOrRemoveProduct,
  ProductsQte,
}) {
  return (
    <>
      <div style={{ float: "right" }}>
        <button
          type="submit"
          disabled={ProductsQte === 0}
          onClick={() => addOrRemoveProduct(product.name, false)}
        >
          -
        </button>

        <button
          type="submit"
          onClick={() => addOrRemoveProduct(product.name, true)}
        >
          +
        </button>
      </div>
      <div style={{ clear: "both" }} />
    </>
  )
}

/* eslint react/prop-types: 0 */

export default ButtonAddAndDeleteOneProduct
