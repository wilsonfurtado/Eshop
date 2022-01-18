// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, createContext, useMemo } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Products from "./Products"
import Cart from "./Cart"
import Confirmation from "./Confirmation"
import FormInformation from "./FormInformation"
import products from "../data/products.json"

import MyContext from "../components/MyContext"
import Calandar from "./Calandar"

export const GlobalSpinnerContext = createContext()

const App = function () {
  const [data, setData] = useState(null)

  const [productsQte, setProductsQte] = useState({
    Fraise: 0,
    Kiwi: 0,
    Pomelo: 0,
    Pomme: 0,
    Clementine: 0,
    Chocolat: 0,
    Pain: 0,
    Lait: 0,
    Soda: 0,
  })

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
  })

  useEffect(() => {
    setTimeout(() => {
      setData(products)
    }, 1000)
  }, [])

  const history = useHistory()

  const expensive = (values) => {
    const valForm = []
    Object.keys(values).map((key) => {
      valForm.push(values[key])

      return null
    })

    setInput((prevState) => ({
      ...prevState,
      firstName: valForm[0],
      lastName: valForm[1],
      email: valForm[2],
      phone: valForm[3],
      address: valForm[4],
      postalCode: valForm[5],
    }))
  }

  const total =
    productsQte.Fraise * 2 +
    productsQte.Kiwi * 4 +
    productsQte.Pomelo * 2 +
    productsQte.Pomme * 2 +
    productsQte.Clementine * 2 +
    productsQte.Chocolat * 2 +
    productsQte.Pain * 2 +
    productsQte.Lait * 2 +
    productsQte.Soda * 2

  const price = { total }

  const value = useMemo(() => price, [total])

  const goBack = () => {
    history.goBack()
  }

  const goForward = () => {
    history.goForward()
  }

  const addOrRemoveProduct = (productName, addOrRemove) => {
    setProductsQte((prevState) => ({
      ...prevState,
      [productName]: addOrRemove
        ? prevState[productName] + 1
        : prevState[productName] - 1,
    }))
  }

  if (!data) {
    return (
      <Loading>
        <p>Chargement...</p>
      </Loading>
    )
  }

  return (
    <>
      <Header />
      <hr />
      <Router>
        <Switch>
          <Route path="/cart">
            <>
              <ContainerBackHome>
                <Link to="/">Retour produits</Link>
              </ContainerBackHome>
              <hr />
              <Cart
                products={data}
                productsQte={productsQte}
                total={total}
                addOrRemoveProduct={addOrRemoveProduct}
              />
              <LinkBuy>
                <Link to="/information">Finaliser l'achat</Link>
              </LinkBuy>
            </>
          </Route>

          <Route path="/information">
            <ContainerBackHome>
              <Link to="/">Retour produits</Link>
            </ContainerBackHome>
            <hr />
            <MyContext.Provider value={value}>
              <FormInformation
                products={data}
                productsQte={productsQte}
                addOrRemoveProduct={addOrRemoveProduct}
                expensive={expensive}
              />
            </MyContext.Provider>
          </Route>

          <Route path="/confirmation">
            <>
              <ContainerBackHome>
                <Link to="/">Retour produits</Link>
              </ContainerBackHome>
              <hr />
              <Confirmation
                products={data}
                productsQte={productsQte}
                total={total}
                inputFirstName={input.firstName}
                inputAdresse={input.address}
                inputPostalCode={input.postalCode}
              />
            </>
          </Route>

          <Route path="/calandar">
            <>
              <ContainerBackHome>
                <Link to="/">Retour produits</Link>
              </ContainerBackHome>
              <hr />
              <Calandar />
            </>
          </Route>

          <Route path="/">
            <>
              <ContainerCart>
                <Link to="/cart">Panier :</Link> <span> {total} €</span>
              </ContainerCart>
              <hr />
              <SubTitle>Produits</SubTitle>

              <Products
                products={data}
                productsQte={productsQte}
                addOrRemoveProduct={addOrRemoveProduct}
              />
            </>
          </Route>
        </Switch>
      </Router>
      <Footer goBack={goBack} goForward={goForward} />
    </>
  )
}

const SubTitle = styled.h2({
  textAlign: "center",
  padding: "0",
  backgroundColor: "palevioletred",
})

const ContainerCart = styled.div({
  textAlign: "right",
  marginRight: "4rem",
})

const ContainerBackHome = styled.div({
  // textAlign: "right",
  marginLeft: "4rem",
})

const LinkBuy = styled.div({
  width: "7rem",
  margin: "auto",
})

const Loading = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "darkslateblue",
  height: "100vh",
  width: "100vw",
  p: {
    color: "white",
    textAlign: "center",
    fontSize: "2.5rem",
  },
})

export default App
