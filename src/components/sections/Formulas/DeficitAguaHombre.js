import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"

class DeficitHombre extends React.Component {
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
    const peso = this.state.nombre
    const edad = this.state.edad
    const prim = peso * 0.6
    const sec = edad / 140
    const ter = sec - 1
    const resul = prim * ter
    const resultado = resul.toFixed(1)
    document.querySelector("#resultado").textContent = resultado
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
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
        <div id="resultado"></div>
      </Form>
    )
  }
}

export default DeficitHombre
