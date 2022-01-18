import React from "react"

const Confirmation = function ({
  products,
  productsQte,
  total,
  inputFirstName,
  dayChecked,
  inputAdresse,
  inputPostalCode,
}) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue

  const qteProducts = Object.values(productsQte)

  return (
    <>
      <h2>Résumé de votre commande </h2>
      <hr />
      <p>
        Bonjour {inputFirstName} voici un résumé de votre commande, vous serez
        livré {dayChecked} au {inputAdresse} {inputPostalCode}
      </p>
      <p> {qteProducts.reduce(reducer)} produits sélectionnés : </p>
      <ul id="listProductSelected">
        {products.map((product, index) => {
          if (qteProducts[index] > 0) {
            return (
              <li key={product.id}>
                {`${qteProducts[index]}
                  ${product.name}
                  ${product.price} €`}
              </li>
            )
          }
          return null
        })}
      </ul>
      <p>Total : {total} €</p>
    </>
  )
}

/* eslint react/prop-types: 0 */

export default Confirmation
