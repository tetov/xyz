import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const HeroProjPreview = ({
  excerpt,
  fields: { slug },
  frontmatter: { title, description, image, imageAlt },
}: Queries.HeroProjPreviewFragment) => {
  const bannerImgData = image?.childImageSharp?.bannerImgData;

  if (!bannerImgData) {
    throw new Error("No hero pic for project.");
  }

  return (
    <>
      <section className="group">
        <Link to={`/${slug}/`} className="link-style">
          <GatsbyImage
            alt={imageAlt || `Banner image for ${title}`}
            image={bannerImgData}
            loading="eager"
            className="mb-8 md:mb-16 group-hover:opacity-80"
          />
        </Link>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <h2 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link to={`/${slug}/`} className="link-style">
              {title}
            </Link>
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: trust me
            dangerouslySetInnerHTML={{ __html: description || excerpt || "" }}
          />
        </div>
      </section>
    </>
  );
};

export default HeroProjPreview;

export const fragment = graphql`
  fragment HeroProjPreview on MarkdownRemark {
    excerpt(pruneLength: 160, format: HTML)
    frontmatter {
      title
      description
      imageAlt
      image {
        ...BannerImg
      }
    }
    fields {
      slug
    }
  }
`;
