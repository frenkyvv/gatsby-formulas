import Alert from "react-bootstrap/Alert"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"

function Alertas() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map(variant => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}

export default Alertas
