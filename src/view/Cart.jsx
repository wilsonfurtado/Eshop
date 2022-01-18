import React from "react"
import styled from "styled-components"
import ButtonAddAndDeleteOneProduct from "../components/ButtonAddAndDeleteOneProduct"

const SubTitle = styled.h2({
  textAlign: "center",
  backgroundColor: "palevioletred",
})

const QteProductSelected = styled.p({
  textAlign: "center",
})

const List = styled.ul({
  background: "darkslateblue",
  padding: "20px",
  width: "18%",
  listStyle: "none",
  margin: "auto",
  li: {
    background: "palevioletred",
    margin: "5px",
    color: "white",
  },
})

const Total = styled.p({
  color: "white",
  textAlign: "center",
})

const Cart = function ({ products, total, productsQte, addOrRemoveProduct }) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue

  const qteProducts = Object.values(productsQte)

  return (
    <>
      <SubTitle>Votre panier </SubTitle>
      <QteProductSelected>
        {" "}
        {qteProducts.reduce(reducer)} produits sélectionnés :{" "}
      </QteProductSelected>
      <List id="listProductSelected">
        {products.map((product, index) => {
          const activeColor = qteProducts[index] > 0 ? "black" : "white"
          if (qteProducts[index] > 0) {
            return (
              <li key={product.id} style={{ color: activeColor }}>
                {`${qteProducts[index]} | 
                  ${product.name}
                  ${product.price} €`}
                <ButtonAddAndDeleteOneProduct
                  ProductsQte={qteProducts[index]}
                  product={product}
                  addOrRemoveProduct={addOrRemoveProduct}
                />
              </li>
            )
          }
          return null
        })}
        <Total>Somme à payer : {total} €</Total>
      </List>
      <br />
    </>
  )
}

/* eslint react/prop-types: 0 */

export default Cart
