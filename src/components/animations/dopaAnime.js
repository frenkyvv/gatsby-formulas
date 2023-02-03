import React from "react"
import styled from "styled-components"

export default function DopaAnime() {
  return (
    <Wrapper>
      <Texto>Aqui van las fotos</Texto>
      <Imagen src="/images/companies/apple.svg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Imagen = styled.img`
  position: absolute;
  top: 40px;
  width: 260px;
  height: 150px;
  border-radius: 16px;
  border-color: 1px, solid, black;
`
const Texto = styled.p`
  font-size: 26px;
  font-weight: bold;
`
