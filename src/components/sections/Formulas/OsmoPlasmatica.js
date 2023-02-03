import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"

class OsmoPlasmaticaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sodio: "",
      potasio: "",
      glucosa: "",
      urea: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const target = e.target
    const value = target.value
    const sodio = target.name
    const potasio = target.name
    const glucosa = target.name
    const urea = target.name

    this.setState({
      [sodio]: value,
      [potasio]: value,
      [glucosa]: value,
      [urea]: value,
    })
  }
  handleSubmit(e) {
    const sod = this.state.sodio
    const pot = this.state.potasio
    const glu = this.state.glucosa
    const ure = this.state.urea
    const res = glu / 18 + ure / 6 + pot * 2 + sod * 2
    document.querySelector("#resu").textContent = `${res.toFixed(1)}`
    $("#etiquetas").hide()
    e.preventDefault()
  }

  render() {
    return (
      <Form>
        <div id="etiquetas">
          <Form.Group className="mb-3" controlId="sodioInput">
            <Form.Label>Sodio:</Form.Label>
            <Form.Control
              name="sodio"
              onChange={this.handleChange}
              value={this.state.sodio}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="glucosaInput">
            <Form.Label>Glucosa:</Form.Label>
            <Form.Control
              name="glucosa"
              value={this.state.glucosa}
              onChange={this.handleChange}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="potasioInput">
            <Form.Label>Potasio:</Form.Label>
            <Form.Control
              name="potasio"
              type="number"
              value={this.state.potasio}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ureaInput">
            <Form.Label>Urea:</Form.Label>
            <Form.Control
              name="urea"
              type="number"
              value={this.state.urea}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
        <div id="resu"></div>
      </Form>
    )
  }
}

export default OsmoPlasmaticaForm
