import React from "react"
import { Field, ErrorMessage } from "formik"
import Label from "./Label.tsx"

const Input = function ({ name, textDisplay, type }) {
  return (
    <div>
      <Label text={textDisplay} required htmlFor={name} />
      <Field id={name} style={{ width: "95%" }} name={name} type={type} />
      <ErrorMessage component="div" style={{ color: "#ff5722" }} name={name} />
      {type === "checkbox" && (
        <p>Je veux recevoir aussi les news et les offres</p>
      )}
    </div>
  )
}

/* eslint react/prop-types: 0 */

export default Input
