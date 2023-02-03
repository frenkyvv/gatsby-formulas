import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Pagina2 from "../botones/Pagina2"

function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>Formulas</Title>
            <Description>
              Formulas médicas para mejorar tus diagnosticos
            </Description>
          </TextWrapper>
          <DivColDer>
            <LinkWrapper>
              <Link to="/page-2/">
                <Pagina2 text="Dopamina" />
              </Link>
              <Link to="/page-3/">
                <Pagina2 text="Dobutamina" />
              </Link>
              <Link to="/page-4/">
                <Pagina2 text="Deficit Agua" />
              </Link>
              <Link to="/page-5/">
                <Pagina2 text="Bicarbonato" />
              </Link>
              <Link to="/page-6/">
                <Pagina2 text="Na corregido" />
              </Link>
              <Link to="/page-7/">
                <Pagina2 text="Alteplase" />
              </Link>
              <Link to="/page-8/">
                <Pagina2 text="Osmolaridad" />
              </Link>
              <Link to="/page-9/">
                <Pagina2 text="SIR" />
              </Link>
            </LinkWrapper>
          </DivColDer>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}
export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`
const Description = styled.p`
  color: cyan;
`
const TextWrapper = styled.div`
  max-width: 300px;
  display: grid;
  gap: 30px;
`
const DivColDer = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  gap: 20px;
`
