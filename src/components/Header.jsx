import React from "react"
import styled from "styled-components"

const Header = function () {
  return (
    <HeaderContainer>
      <Title>ESHOP</Title>
    </HeaderContainer>
  )
}

const Title = styled.h1({
  textAlign: "center",
  margin: "0",
  paddingTop: "1.5rem",
  color: "white",
})

const HeaderContainer = styled.header({
  height: "6rem",
  margin: "0",
  padding: "0",
  backgroundColor: "darkslateblue",
})

export default Header
