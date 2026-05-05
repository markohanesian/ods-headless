export const WP_URL = process.env.WP_URL || "https://ohanesiandigitalsolutions.com/graphql";

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
      console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
      return {} as T;
    }

    return json.data;
  } catch (error) {
    console.error("WP Fetch Error:", error);
    return {} as T;
  }
}

export async function getPortfolioItems(category?: string, first: number = 20, exclude?: string): Promise<PortfolioItem[]> {
  const query = `
    query GetPortfolioPosts($category: String, $first: Int) {
      posts(where: { categoryName: $category }, first: $first) {
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

  const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query, { 
    category: category || "work", 
    first 
  });
  let nodes = data?.posts?.nodes || [];

  if (exclude) {
    nodes = nodes.filter(node => !node.categories.nodes.some(c => c.slug === exclude));
  }

  return nodes.map(node => {
    // Basic HTML tag removal and entity decoding
    const cleanExcerpt = node.excerpt
      ?.replace(/<[^>]*>?/gm, '')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&hellip;/g, '...')
      .trim();

    return {
      ...node,
      excerpt: cleanExcerpt ? cleanExcerpt.substring(0, 160) + (cleanExcerpt.length > 160 ? '...' : '') : ''
    };
  });
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

  interface AboutPageData {
    title: string;
    content: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  }

  const data = await wpFetch<{ page: AboutPageData }>(query);
  return data?.page;
}

export async function getPageByUri(uri: string) {
  const query = `
    query GetPageByUri($id: ID!) {
      page(id: $id, idType: URI) {
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

  interface PageData {
    title: string;
    content: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  }

  const data = await wpFetch<{ page: PageData }>(query, { id: uri });
  return data?.page;
}
