export const WP_URL = "https://ohanesiandigitalsolutions.com/graphql";

export interface PortfolioItem {
  title: string;
  slug: string;
  excerpt: string;
  date?: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
}

export async function wpFetch<T>(query: string, variables = {}): Promise<T> {
  try {
    const res = await fetch(WP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      return {} as T;
    }

    return json.data;
  } catch (error) {
    console.error("WP Fetch Error:", error);
    return {} as T;
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const query = `
    query GetPortfolioPosts {
      posts(where: { categoryName: "work" }, first: 20) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query);
  return data?.posts?.nodes || [];
}

export async function getBlogPosts(): Promise<PortfolioItem[]> {
  const query = `
    query GetBlogPosts {
      posts(where: { categoryName: "blog" }, first: 10) {
        nodes {
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query);
  const nodes = data?.posts?.nodes || [];
  
  return nodes.map(node => ({
    ...node,
    excerpt: node.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...'
  }));
}

export async function getPostBySlug(slug: string): Promise<PortfolioItem | null> {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const data = await wpFetch<{ post: PortfolioItem }>(query, { id: slug });
  return data?.post || null;
}

export async function getAboutPageData() {
  const query = `
    query GetAboutPage {
      page(id: "about", idType: URI) {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data = await wpFetch<{ page: any }>(query);
  return data?.page;
}
