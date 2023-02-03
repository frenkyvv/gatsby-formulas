import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Pagina2 from "../components/botones/Pagina2"
import DobutaminaForm from "../components/sections/Formulas/DobutaForm"

function Pagina3() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <SEO title="Dobutamina" />
          <TextWrapper>
            <Titulo>Dosis de Dobutamina</Titulo>
            <Description>
              Formula para calcular la dosis de Dobutamina
            </Description>
            <Link to="/">
              <Pagina2 text="Back" />
            </Link>
            <br />
          </TextWrapper>
          <FormWrapper>
            <DobutaminaForm />
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Pagina3

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const Titulo = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`
const Description = styled.p`
  font-size: 17px;
  color: cyan;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
  grid-column-gap: 30px;
`
const FormWrapper = styled.div`
  max-width: 260px;
`
