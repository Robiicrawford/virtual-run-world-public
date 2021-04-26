/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions
  	const lang_path = page.context.language === 'en' ? '/': '/'+page.context.language+'/';
  	if (page.path.match(/\b(\w*download-bib\w*)\b/g)) {
		page.matchPath = `${lang_path}download-bib/*`
	    // Update the page.
	    createPage(page)
	}
}