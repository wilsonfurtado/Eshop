import React from "react"

const Label = (props: { text: string; htmlFor: string; required: boolean }) => {
  const { text, htmlFor, required } = props

  return (
    <div>
      <label htmlFor={htmlFor}>
        <span className="font-weight-bold" style={{ color: "white" }}>
          {text}
        </span>
        {required && <span className="text-danger">*</span>}
      </label>
    </div>
  )
}

export default Label
