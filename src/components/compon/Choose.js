import React from "react"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import styled from "styled-components"

class Choose extends React.Component {
  clickHombre(event) {
    $("#botMuj").hide()
  }

  render() {
    return (
      <div id="escoger">
        <Botones>
          <Button variant="primary" id="botHom" onClick={this.clickHombre}>
            Hombre
          </Button>
          <Button variant="primary" id="botMuj" onClick={this.clickMujer}>
            Mujer
          </Button>
        </Botones>
      </div>
    )
  }
}
export default Choose

const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
