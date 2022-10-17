import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { ArticleListing } from "src/components/article";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Posts: React.FC<PageProps<Queries.PostsQuery>> = ({
  location: { pathname },
  data: {
    allMarkdownRemark: { nodes: postNodes },
  },
}) => {
  return (
    <Layout pathname={pathname}>
      <PageTitle>Posts</PageTitle>
      <ArticleListing nodes={postNodes as Queries.MarkdownRemark[]} />
    </Layout>
  );
};

export default Posts;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent pathname={location.pathname} />
);

// Query with /(DIR)/
export const query = graphql`
  query Posts {
    allMarkdownRemark(
      filter: { fields: { category: { eq: "posts" } } }
      sort: { fields: [frontmatter___weight], order: DESC }
      limit: 10
    ) {
      nodes {
        id
        ...ArticlePreview
        ...HeroProjPreview
      }
    }
  }
`;