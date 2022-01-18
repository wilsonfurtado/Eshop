import React from "react"
import styled from "styled-components"
import ButtonAddAndDeleteOneProduct from "./ButtonAddAndDeleteOneProduct"
import MyContext from "./MyContext"

const ShoppingList = function ({ products, productsQte, addOrRemoveProduct }) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue

  const qteProducts = Object.values(productsQte)

  return (
    <div>
      <h2 style={{ marginLeft: "4rem" }}>Formulaire de livraison : </h2>
      <hr />
      <SubTitle>Liste des courses</SubTitle>
      <QteProductSelected>
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

        <MyContext.Consumer>
          {(value) => (
            <div>
              <Total>Total (ttc) : {value.total} €</Total>
              <Total>Total (ht) : {value.total} €</Total>
            </div>
          )}
        </MyContext.Consumer>
      </List>
      <br />
      <hr />
      <SubTitle>Contact : </SubTitle>
    </div>
  )
}

/* Style */
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

/* eslint react/prop-types: 0 */

export default ShoppingList
