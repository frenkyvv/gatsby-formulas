import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

class AlteplaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      peso: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    const pes = this.state.peso
    let todo = pes * 0.9
    let bolo = todo * 0.1
    let resto = todo - bolo
    document.querySelector(
      "#resultado"
    ).textContent = `Le corresponde ${todo.toFixed(
      0
    )} mg: Pasar bolo de ${bolo.toFixed(
      0
    )} mg y posterior pasar ${resto.toFixed(0)} mg en 60 min IV. 
          En caso de ser mas de 90 mg totales, pasar 9 mg en bolo y 81 mg en 60 min IV infusion continua.`
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Peso: </Form.Label>
          <Form.Control
            name="peso"
            type="number"
            value={this.state.peso}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
        <br />
        <Resultado>
          <div id="resultado"></div>
        </Resultado>
      </Form>
    )
  }
}

export default AlteplaseForm

const Resultado = styled.div`
  #resultado {
    color: cyan;
  }
`
