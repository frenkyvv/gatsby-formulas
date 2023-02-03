import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import DeficitAguaHombre from "../components/sections/Formulas/DeficitAguaHombre"
import DeficitAgua from "../components/sections/Formulas/DeficitAgua"
import Pagina2 from "../components/botones/Pagina2"

class Pagina4 extends React.Component {
  clickHombre(event) {
    $("#escoger").hide()
    $("#formwraper").show()
  }
  clickMujer(event) {
    $("#escoger").hide()
    $("#formwrapermujer").show()
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Deficit de Agua" />
            <TextWrapper>
              <Titulo>Deficit de Agua</Titulo>
              <Description>Formula para calular el deficit de agua</Description>
              <Link to="/">
                <Pagina2 text="Back" />
              </Link>
              <br />
            </TextWrapper>
            <FormWrapper1>
              <div id="escoger">
                <Botones>
                  <Button
                    variant="primary"
                    id="botHom"
                    onClick={this.clickHombre}
                  >
                    Hombre
                  </Button>
                  <Button
                    variant="primary"
                    id="botMuj"
                    onClick={this.clickMujer}
                  >
                    Mujer
                  </Button>
                </Botones>
              </div>

              <FormWrapper id="formwraper">
                <DeficitAguaHombre />
              </FormWrapper>
              <FormWrapperMujer id="formwrapermujer">
                <DeficitAgua />
              </FormWrapperMujer>
            </FormWrapper1>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

export default Pagina4

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
const FormWrapper1 = styled.div`
  max-width: 250px;
`
const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const FormWrapper = styled.div`
  max-width: 250px;
  height: 300px;
  display: none;
`
const FormWrapperMujer = styled.div`
  max-width: 330px;
  height: 300px;
  display: none;
`
