import React from "react"
import styled from "styled-components"

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <Text>Dr. Nephtali Valles | @vallesmd.live | 2022 | v1.0</Text>
      </FooterWrapper>
    )
  }
}

export default Footer

const FooterWrapper = styled.div``
const Text = styled.p`
  text-align: center;
  font-size: smaller;
`
