import React from "react"

import ContactLinks from "../components/Contact/ContactLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => {
	return (
		<Layout>
			<SEO title="Contact" />
			<h1>Contact</h1>
			<p>Contact information</p>
			<ContactLinks />
		</Layout>
	)
}

export default ContactPage
