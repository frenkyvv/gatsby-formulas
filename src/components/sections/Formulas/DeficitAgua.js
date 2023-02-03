import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import $ from "jquery"

class DeficitAgua extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "",
      edad: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const edad = target.edad

    this.setState({
      [name]: value,
      [edad]: value,
    })
  }

  handleSubmit(event) {
    $("#footwrapp").show()
    $("#But").hide()
    const peso = this.state.nombre
    const edad = this.state.edad
    const prim = peso * 0.5
    const sec = edad / 140
    const ter = sec - 1
    const resul = prim * ter
    const resultado = resul.toFixed(1)
    document.querySelector(
      "#resulta"
    ).textContent = `Se requieren ${resultado} Litros, para llevar el Sodio a 140 mEq/dl`
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Peso: </Form.Label>
          <Form.Control
            name="nombre"
            type="number"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Na serico: </Form.Label>
          <Form.Control
            name="edad"
            type="number"
            value={this.state.edad}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button id="But" variant="primary" type="submit" value="Submit">
          Submit
        </Button>
        <Footwrapp id="footwrapp">
          <div id="resulta"></div>
        </Footwrapp>
      </Form>
    )
  }
}
export default DeficitAgua

const Footwrapp = styled.div`
  font-size: 20px;
  max-width: 380px;
  height: 120px;
  display: none;
  padding-top: 20px;

  #resulta {
    text-align: center;
  }
`
