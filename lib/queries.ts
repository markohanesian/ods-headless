import { gql } from '@apollo/client';

export const GET_SERVICES_AND_PORTFOLIO = gql`
  query GetServicesAndPortfolio {
    services(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        serviceDetails {
          iconName
          technologies
        }
      }
    }
    portfolios(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioDetails {
          projectUrl
          completionDate
          role
        }
      }
    }
  }
`;
