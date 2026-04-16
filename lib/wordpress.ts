export const WP_URL = "https://ohanesiandigitalsolutions.com/graphql";

export interface PortfolioItem {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
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
      next: { revalidate: 0 }, // Disable cache temporarily for debugging
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      return { posts: { nodes: [] } } as any; // Return empty nodes instead of throwing
    }

    return json.data;
  } catch (error) {
    console.error("WP Fetch Error:", error);
    return { posts: { nodes: [] } } as any;
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // First, try fetching from the Menu
  const menuQuery = `
    query GetClientWorkMenu {
      menu(id: "Client Work", idType: NAME) {
        menuItems(first: 20) {
          nodes {
            connectedNode {
              node {
                ... on Page {
                  title
                  slug
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const menuData = await wpFetch<{ menu: { menuItems: { nodes: any[] } } }>(menuQuery);
    const menuItems = menuData?.menu?.menuItems?.nodes || [];
    
    if (menuItems.length > 0) {
      return menuItems
        .map(item => {
          const node = item.connectedNode?.node;
          if (!node) return null;
          return {
            title: node.title,
            slug: node.slug,
            excerpt: `Technical breakdown and architecture audit for ${node.title}.`,
            featuredImage: node.featuredImage,
            categories: { nodes: [{ name: 'Case Study' }] }
          };
        })
        .filter(Boolean) as PortfolioItem[];
    }
  } catch (e) {
    console.error("Menu fetch failed, falling back to slug fetch", e);
  }

  // Fallback: Fetch specific pages by slug if menu is missing or empty
  const fallbackQuery = `
    query GetSpecificPages {
      pages(where: { nameIn: ["the-pomegranate-boutique", "diversified-land-management"] }) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const fallbackData = await wpFetch<{ pages: { nodes: any[] } }>(fallbackQuery);
  const nodes = fallbackData?.pages?.nodes || [];

  return nodes.map(node => ({
    title: node.title,
    slug: node.slug,
    excerpt: `Technical breakdown and architecture audit for ${node.title}.`,
    featuredImage: node.featuredImage,
    categories: { nodes: [{ name: 'Case Study' }] }
  }));
}

export async function getBlogPosts(): Promise<PortfolioItem[]> {
  const query = `
    query GetBlogPosts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
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
            }
          }
        }
      }
    }
  `;

  const data = await wpFetch<{ posts: { nodes: any[] } }>(query);
  const nodes = data?.posts?.nodes || [];
  
  return nodes.filter(node => node.slug !== 'hello-world').map(node => ({
    ...node,
    // Ensure excerpt is clean
    excerpt: node.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...'
  }));
}

export async function getAboutPageData() {
  const query = `
    query GetAboutPage {
      page(id: "about", idType: URI) {
        title
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
