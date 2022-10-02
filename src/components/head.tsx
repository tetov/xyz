import querySiteMetadata from "src/hooks/query-site-metadata";
import queryTwitterUname from "src/hooks/query-twitter-uname";

export const Head: React.FC<{
  pathname?: string;
  pageTitle?: string;
  description?: string;
  image?: string;
  pageDate?: string;
  pageType?: string;
}> = ({ pageTitle, description, image, pathname, children }) => {
  const {
    title: siteTitle,
    description: defaultDescription,
    image: defaultImage,
    siteURL,
  } = querySiteMetadata();
  const twitterUsername = queryTwitterUname();

  const metaDescription = description.trim() || defaultDescription.trim();
  const metaImage = `${siteURL}${image || defaultImage}`;

  return (
    <>
      <title>{pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle}</title>
      <meta property="og:title" content={pageTitle || siteTitle} />

      <meta property="og:site_name" content={siteTitle} />

      <meta
        name="description"
        content={description.trim() || defaultDescription.trim()}
        id="description"
      />

      <meta
        property="og:description"
        content={metaDescription}
        id="description"
      />

      <meta property="og:image" content={metaImage} />

      <meta property="og:url" content={`${siteURL}${pathname || ``}`} />

      <meta property="og:type" content="website" id="og:type" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      {children}
    </>
  );
};
