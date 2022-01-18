import React from "react"

const ButtonSubmit = function ({ displayReport, disabled }) {
  return (
    <>
      {!disabled && (
        <button type="submit" onClick={displayReport} disabled>
          Acheter
        </button>
      )}
      {disabled && (
        <button type="submit" onClick={displayReport}>
          Acheter
        </button>
      )}
    </>
  )
}

/* eslint react/prop-types: 0 */

export default ButtonSubmit
