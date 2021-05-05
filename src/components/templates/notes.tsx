import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"

const TemplateNote: GatsbyPage<GatsbyTypes.NotePropQuery> = ({
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        slug,
        heroImg: { heroImgData },
      },
      frontmatter: { lang, date, machineReadableDate },
    },
  },
}) => (
  <Layout description={excerpt} lang={lang} subHeading="a note">
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/SocialMediaPosting"
    >
      <ContentBody content={html} itemProp="articleBody" className="p-name" />
      <GatsbyImage
        alt={excerpt}
        image={heroImgData}
        loading="eager"
        className="mb-8 md:mb-16"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200 u-photo"
        itemProp="sharedContent"
      />
      <Link to={`./notes/${slug}`} className="alt-link-style">
        <time itemProp="dateCreated" dateTime={machineReadableDate}>
          {date}
        </time>
      </Link>
    </article>
  </Layout>
)

export default TemplateNote

export const pageQuery = graphql`
  query NoteProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      fields {
        slug
        heroImg {
          ...HeroImg
        }
      }
      frontmatter {
        lang
        date(formatString: "HH:mm D [of] MMM, YYYY")
        machineReadableDate: date
      }
    }
  }
`
