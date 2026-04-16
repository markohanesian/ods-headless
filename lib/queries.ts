import { gql } from '@apollo/client';

export const GET_CASE_STUDIES = gql`
  query GetCaseStudies {
    portfolios(first: 10) {
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
          serviceCategory
          projectResult
          technologies
        }
      }
    }
  }
`;

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
