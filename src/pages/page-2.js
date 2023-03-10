import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Pagina2 from "../components/botones/Pagina2"
import DopaminaForm from "../components/sections/Formulas/DopaminaForm"

function SecondPage() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <SEO title="Dopamina" />
          <TextWrapper>
            <Title>Dosis de Dopamina</Title>
            <Description>
              Formula para calcular la dosis de Dopamina
            </Description>
            <Link to="/">
              <Pagina2 text="Back" />
            </Link>
            <br />
          </TextWrapper>
          <FormWrapper>
            <DopaminaForm />
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default SecondPage

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
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
  color: cyan;
`
const FormWrapper = styled.div`
  max-width: 250px;
`
