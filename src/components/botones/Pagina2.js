import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import styled from "styled-components"

function Pagina2(props) {
  return (
    <Box>
      <Text>{props.text || "Boton"}</Text>
    </Box>
  )
}

export default Pagina2

const Box = styled.div`
  width: 150px;
  height: 55px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Text = styled.p`
  font-size: 17px;
  line-height: 130%;
  text-align: center;
  padding-top: 15px;
`
