import React from "react"
import styled from "styled-components"

const Footer = function ({ goBack, goForward }) {
  return (
    <FooterContainer>
      <div>
        <button type="button" onClick={goBack}>
          Précédent
        </button>
        <button type="button" onClick={goForward}>
          Suivant
        </button>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer({
  height: "5rem",
  marginTop: "5rem",
  backgroundColor: "darkslateblue",
  bottom: 0,
  width: "100%",

  div: {
    marginLeft: "4rem",
    paddingTop: "1.6rem",
  },
})

/* eslint react/prop-types: 0 */

export default Footer
