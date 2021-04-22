import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            social {
              
               text 
                icon
                url
                hcard
              }
            
            description
            logo
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
