import * as React from "react"
import { Link, graphql } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Seo from "../components/seo"

import BibDownload from "../page-templates/BibDownload"

const SecondPage = ({pageContext}) => {
	const lang_path = pageContext.language === 'en' ? '/': '/'+pageContext.language+'/';
	return(
	  <Layout>
	    <Seo title="Page two" />
	    <Router>
			<BibDownload path={`${lang_path}download-bib/:id`} />
		</Router>
	  </Layout>
	)
}

export default SecondPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
