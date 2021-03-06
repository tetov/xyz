import { graphql } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import React from "react";
import { ContentBody, ContentHeader } from "src/components/content";
import Layout from "src/components/layout";
import { MetaContent, MetaImage } from "src/components/meta";

const TemplateProj: GatsbyPage<GatsbyTypes.ProjPropQuery> = ({
  location: { pathname },
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        heroImg: { heroImgData },
        slug,
      },
      frontmatter: { title, description, lang },
    },
  },
}) => (
  <Layout pathName={pathname}>
    <MetaContent
      title={title}
      excerpt={description || excerpt}
      lang={lang}
      type="article"
    />
    <MetaImage src={getSrc(heroImgData)} />
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <ContentHeader url={`/${slug}`}>{title}</ContentHeader>
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={heroImgData}
        loading="eager"
        className="mb-8 md:mb-16"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
      />
      <ContentBody content={html} itemProp="about" />
    </article>
  </Layout>
);

export default TemplateProj;

export const pageQuery = graphql`
  query ProjProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      ...ProjMetaData
      html
      fields {
        heroImg {
          ...HeroImg
        }
      }
    }
  }
`;
