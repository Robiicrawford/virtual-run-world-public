/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import  {SkeletonTheme}  from "react-loading-skeleton";
import { ThemeProvider } from '@emotion/react'
import theme from '@rebass/preset'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme color="#242526" highlightColor="#444">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >

            © {new Date().getFullYear()}, 
            {` `}
            <a href="https://www.virtualrun.world">Virtual Run World</a>
          </footer>
      </SkeletonTheme>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
