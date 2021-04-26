import * as React from "react"
import PropTypes from "prop-types"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

import { StaticImage } from "gatsby-plugin-image"
import {Flex, Text, Box} from "rebass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const  LanguageMenu = ()=> {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <i aria-label="change language" onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faGlobe} size="lg" />
      </i>
    
    </div>
  );
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <Flex
      px={2}
      color='white'
      bg='black'
      alignItems='center'>
      <Link to="/">
        <StaticImage 
          src="../images/logos/logo-icon.png" alt="Virtual Run World"  height={70} style={{margin:'10px 5px'}}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </Link>
      <Box mx='auto' />
      <Link variant='nav' href='#!'>
        Profile
      </Link>
      <Box px={2}>
        <LanguageMenu/>
      </Box>
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
