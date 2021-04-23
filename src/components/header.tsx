import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import {Flex, Text, Box} from "rebass"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      px={2}
      color='white'
      bg='black'
      alignItems='center'>
      <StaticImage 
        src="../images/logos/logo-icon.png" alt="Virtual Run World"  height={70} style={{margin:'10px 0'}}
        formats={["AUTO", "WEBP", "AVIF"]}
      />
      <Box mx='auto' />
      <Link variant='nav' href='#!'>
        Profile
      </Link>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
