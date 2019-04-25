import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import Container from "components/Container";
import Hero from "components/Hero";
import TalkCard from "components/TalkCard";
import theme from "../../config/theme";

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout site={site} headerBg={theme.brand.primary} noSubscribeForm>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: talk }) => (
          <TalkCard talk={talk} />
        ))}
        <hr />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    allMdx(
      filter: { fields: { type: { eq: "talks" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            url
            place
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }

            keywords
          }
        }
      }
    }
  }
`;
