import React from "react"
import styled from "styled-components"
import ButtonAddAndDeleteOneProduct from "../components/ButtonAddAndDeleteOneProduct"

const List = styled.ul({
  background: "darkslateblue",
  padding: "20px",
  width: "18%",
  listStyle: "none",
  margin: "auto",
  li: {
    background: "palevioletred",
    margin: "5px",
  },
})

const Products = function ({ products, addOrRemoveProduct, productsQte }) {
  const qteProducts = Object.values(productsQte)
  return (
    <List>
      {products.map((product, index) => {
        const activeColor = qteProducts[index] > 0 ? "black" : "white"
        return (
          <li
            key={product.id}
            style={{ color: activeColor, padding: "0.23rem" }}
          >
            {`${qteProducts[index]} | 
              ${product.name} 
              ${product.price} €
              `}
            <ButtonAddAndDeleteOneProduct
              ProductsQte={qteProducts[index]}
              product={product}
              addOrRemoveProduct={addOrRemoveProduct}
            />
          </li>
        )
      })}
    </List>
  )
}
/* eslint react/prop-types: 0 */

export default Products
