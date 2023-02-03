import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Pagina2 from "../components/botones/Pagina2"
import BicarbonatoForm from "../components/sections/Formulas/BicaForm"

class Pagina5 extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Bicarbonato" />
            <TextWrapper>
              <Titulo>Bicarbonato</Titulo>
              <Description>
                Formula para sacar el deficit de Bicarbonato
              </Description>
              <Link to="/">
                <Pagina2 text="Back" />
              </Link>
            </TextWrapper>
            <FormWrapper>
              <BicarbonatoForm />
            </FormWrapper>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

export default Pagina5

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
  grid-column-gap: 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Titulo = styled.h1`
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
  max-width: 350px;
`
