import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import Pagina2 from "../components/botones/Pagina2"
import OsmoEfectiva from "../components/sections/Formulas/OsmoEfectiva"
import OsmoPlasmaticaForm from "../components/sections/Formulas/OsmoPlasmatica"

class Pagina8 extends React.Component {
  clickEfectiva(event) {
    $("#choose").hide()
    $("#efectiva").show()
  }

  clickPlasmatica(event) {
    $("#choose").hide()
    $("#plasmatica").show()
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Osmolaridad" />
            <TextWrapper>
              <Titulo>Osmolaridad</Titulo>
              <Description>Formula para sacar la Osmolaridad</Description>
              <Link to="/">
                <Pagina2 text="Back" />
              </Link>
              <br />
            </TextWrapper>
            <FormWrapper>
              <div id="choose">
                <Botones>
                  <Button
                    variant="light"
                    id="botEfectiva"
                    onClick={this.clickEfectiva}
                  >
                    Efectiva
                  </Button>
                  <Button
                    variant="light"
                    id="botPlasma"
                    onClick={this.clickPlasmatica}
                  >
                    Plasmatica
                  </Button>
                </Botones>
              </div>
              <FormWrapperEfectiva id="efectiva">
                <OsmoEfectiva />
              </FormWrapperEfectiva>
              <FormWrapperPlasmatica id="plasmatica">
                <OsmoPlasmaticaForm />
              </FormWrapperPlasmatica>
            </FormWrapper>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

export default Pagina8

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
  width: 100%;
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
  max-width: 250px;
`
const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-left: 60px;
`
const FormWrapperEfectiva = styled.div`
  max-width: 250px;
  height: 300px;
  margin-left: 60px;
  display: none;
`
const FormWrapperPlasmatica = styled.div`
  max-width: 330px;
  height: 500px;
  margin-left: 60px;
  display: none;
`
