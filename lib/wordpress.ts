export const WP_URL = process.env.WP_URL || "https://wp.ohanesiandigitalsolutions.com/graphql";

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
  tags?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  projectUrl?: string;
  githubUrl?: string;
}

/**
 * Fixes WordPress media URLs by pointing them to the new wp. subdomain.
 */
function fixMediaUrls(url: string = ''): string {
  if (!url) return '';
  // Replace both http and https versions of the old main domain with the new wp subdomain
  return url.replace(/https?:\/\/ohanesiandigitalsolutions\.com\/wp-content\//g, 'https://wp.ohanesiandigitalsolutions.com/wp-content/');
}

/**
 * Processes content HTML to fix image URLs and extract metadata links.
 */
function processContent(content: string = ''): { 
  fixedContent: string; 
  projectUrl?: string; 
  githubUrl?: string 
} {
  if (!content) return { fixedContent: '' };
  
  // 1. Aggressively fix Image/Media URLs and handle lazy-loading
  let processed = content
    // Replace domain first (handles src, data-src, etc.)
    .replace(/https?:\/\/ohanesiandigitalsolutions\.com\/wp-content\//g, 'https://wp.ohanesiandigitalsolutions.com/wp-content/')
    // Swap data-src to src for lazy-loaded images so they load natively
    .replace(/<img([^>]*?)\s+src="data:image\/gif;base64,R0lGODlhAQABAIAAAAAAAP\/\/\/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"([^>]*?)\s+data-src="([^"]+)"/gi, '<img$1 src="$3"$2')
    // Remove lazyload classes to prevent potential JS conflicts
    .replace(/\s+class="([^"]*?)lazyload([^"]*?)"/gi, ' class="$1$2"')
    // Strip out WPForms redundant containers (using a broad match for common form patterns)
    .replace(/<div[^>]*?class="[^"]*?wpforms-container[^"]*?"[^>]*?>[\s\S]*?<\/div>\s*<\/div>/gi, '') // Try to catch the parent column too
    .replace(/<div[^>]*?class="[^"]*?wpforms-container[^"]*?"[^>]*?>[\s\S]*?<\/div>/gi, '');

  const result: { fixedContent: string; projectUrl?: string; githubUrl?: string } = { fixedContent: processed };
  
  // 2. Extract specific links (Deployment/Github)
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*?>(.*?)<\/a>/gi;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[2];
    const text = match[3].toLowerCase().trim();
    
    if (text === 'link to github') {
      result.githubUrl = href;
    } else if (text === 'link to deployment') {
      result.projectUrl = href;
    }
  }
  
  // Fallback for links
  if (!result.projectUrl || !result.githubUrl) {
    linkRegex.lastIndex = 0;
    while ((match = linkRegex.exec(content)) !== null) {
      const href = match[2];
      const text = match[3].toLowerCase();
      if (!result.githubUrl && (text.includes('github') || text.includes('repository'))) {
        result.githubUrl = href;
      } else if (!result.projectUrl && (text.includes('deployment') || text.includes('live site'))) {
        result.projectUrl = href;
      }
    }
  }
  
  return result;
}

export async function wpFetch<T>(query: string, variables = {}): Promise<T> {
  try {
    const res = await fetch(WP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 }, // Cache for 10 minutes
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      console.warn(`[WP Headless] WordPress endpoint returned HTTP status ${res.status}`);
      return {} as T;
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`[WP Headless] WordPress response was not JSON (${contentType})`);
      return {} as T;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
      return {} as T;
    }

    return json.data;
  } catch (error) {
    console.warn("[WP Headless] Unable to reach WordPress GraphQL API:", error instanceof Error ? error.message : error);
    return {} as T;
  }
}

const FALLBACK_PORTFOLIO: PortfolioItem[] = [
  {
    title: "The Pomegranate Boutique",
    slug: "the-pomegranate-boutique",
    excerpt: "Custom e-commerce web platform and digital storefront built with headless architecture, delivering sub-second page loads and a seamless mobile checkout experience.",
    content: "<p>The Pomegranate Boutique is a custom e-commerce digital storefront engineered for speed, mobile responsiveness, and effortless product discovery. Replacing slow legacy plugins with a modern headless setup, the site delivers sub-second page loads, accessible navigation, and direct payment processing.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2025/08/tpb_homepage.png",
        altText: "Homepage for The Pomegranate Boutique"
      }
    },
    categories: { nodes: [{ name: "Web Development", slug: "web-development" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }, { name: "Web App", slug: "web-app" }] }
  },
  {
    title: "Diversified Land Management",
    slug: "diversified-land-management",
    excerpt: "High-performance digital platform with integrated client lead intake, automated project estimate calculators, and streamlined customer communication.",
    content: "<p>Diversified Land Management is a comprehensive digital platform designed for high-conversion lead generation and operational workflow automation. Built with strategy-first architecture, it features custom intake forms, instant estimate calculators, and direct backend lead routing.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2025/10/dlm-case-study-image-e1777951361171.png",
        altText: "Diversified Land Management Case Study"
      }
    },
    categories: { nodes: [{ name: "Web Development", slug: "web-development" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }, { name: "Web App", slug: "web-app" }] }
  },
  {
    title: "Four Seasons Ag. Services",
    slug: "four-seasons-ag-services",
    excerpt: "Agricultural services platform featuring clear navigation, custom service offerings, and high-performance mobile responsiveness.",
    content: "<p>Four Seasons Ag. Services is a modern digital platform engineered for agricultural operational visibility and client service engagement.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2026/06/screencapture-fourseasons-ag-2026-06-04-05_21_20.png",
        altText: "Four Seasons Ag Services Platform"
      }
    },
    categories: { nodes: [{ name: "Web Development", slug: "web-development" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }] }
  },
  {
    title: "Smart Reports",
    slug: "smart-reports",
    excerpt: "Automated business reporting and analytics suite that unifies client data, sales metrics, and operational workflows into real-time interactive dashboards.",
    content: "<p>Smart Reports is an automated business intelligence application that consolidates raw operational data, client analytics, and revenue metrics into clear, actionable visual dashboards, saving business owners hours of manual spreadsheet compilation every week.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2026/06/ODS-Smart-Reports-Share-Image.png",
        altText: "ODS Smart Reports Share Image"
      }
    },
    categories: { nodes: [{ name: "Custom Apps", slug: "custom-apps" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }, { name: "Web App", slug: "web-app" }] }
  },
  {
    title: "Baggy",
    slug: "baggy",
    excerpt: "Performance-first Chrome extension and developer utility for inspecting, debugging, and optimizing headless CMS data layers in real-time.",
    content: "<p>Baggy is a proprietary Chrome extension built for digital architects and developers to inspect, validate, and optimize GraphQL data structures and headless CMS responses in real-time without context switching.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2026/04/Baggy-WP-Share-Post-Image-ODS.png",
        altText: "Baggy Chrome Extension"
      }
    },
    categories: { nodes: [{ name: "Custom Apps", slug: "custom-apps" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }, { name: "Chrome Extension", slug: "chrome-extension" }] }
  },
  {
    title: "AI COPY",
    slug: "ai-copy",
    excerpt: "AI-powered copywriting assistant and content generation tool optimized for high-converting sales copy and web messaging.",
    content: "<p>AI COPY is a specialized application designed for rapid, ROI-focused web copy generation and marketing asset optimization.</p>",
    featuredImage: {
      node: {
        sourceUrl: "https://wp.ohanesiandigitalsolutions.com/wp-content/uploads/2026/04/AI-Copy-WP-Post-Share-Image-ODS.png",
        altText: "AI Copy Application"
      }
    },
    categories: { nodes: [{ name: "Custom Apps", slug: "custom-apps" }, { name: "Work", slug: "work" }] },
    tags: { nodes: [{ name: "Live", slug: "live" }, { name: "Web App", slug: "web-app" }] }
  }
];

const FALLBACK_BLOG: PortfolioItem[] = [
  {
    title: "Why Custom Web Engineering Beats Off-the-Shelf Page Builders",
    slug: "custom-web-engineering-vs-page-builders",
    excerpt: "Discover how custom web architecture eliminates plugin bloat, boosts conversion rates, and saves business owners 10+ hours per week.",
    date: "2025-02-15",
    categories: { nodes: [{ name: "Blog", slug: "blog" }] }
  },
  {
    title: "Architecting 100% WCAG-Compliant Web Applications",
    slug: "wcag-compliant-web-applications",
    excerpt: "A practical guide to building accessible, inclusive web interfaces that serve every client seamlessly on any device.",
    date: "2025-01-28",
    categories: { nodes: [{ name: "Blog", slug: "blog" }] }
  }
];

export async function getPortfolioItems(category?: string, first: number = 20, exclude?: string): Promise<PortfolioItem[]> {
  // Fetch all posts from WordPress (without restrictively filtering by categoryName in GraphQL)
  const query = `
    query GetPortfolioPosts($first: Int) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          slug
          excerpt
          content
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
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  let nodes: PortfolioItem[] = [];
  try {
    const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query, { first: 50 });
    nodes = data?.posts?.nodes || [];
  } catch (err) {
    console.warn("getPortfolioItems fallback triggered:", err);
  }

  // Filter out blog and team posts
  nodes = nodes.filter(node => 
    !node.categories?.nodes?.some(c => c.slug === "blog" || c.slug === "team")
  );

  // Merge fallbacks for missing items
  if (nodes.length === 0) {
    nodes = FALLBACK_PORTFOLIO;
  } else {
    const existingSlugs = new Set(nodes.map(n => n.slug));
    const missingFallbacks = FALLBACK_PORTFOLIO.filter(f => !existingSlugs.has(f.slug));
    nodes = [...nodes, ...missingFallbacks];
  }

  // Filter by category
  if (category && category !== "all") {
    if (category === "work" || category === "web-development") {
      nodes = nodes.filter(node => 
        node.categories?.nodes?.some(c => c.slug === "web-development" || c.slug === "web-strategy" || c.slug === "work")
      );
    } else if (category === "custom-apps") {
      nodes = nodes.filter(node => 
        node.categories?.nodes?.some(c => c.slug === "custom-apps")
      );
    } else {
      nodes = nodes.filter(node => 
        node.categories?.nodes?.some(c => c.slug === category)
      );
    }
  }

  if (exclude) {
    nodes = nodes.filter(node => 
      !node.categories?.nodes?.some(c => c.slug === exclude)
    );
  }

  return nodes.slice(0, first).map(node => {
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
      .replace(/^About\s+.*?\s+is\s+/i, '')
      .replace(/^About\s+/i, '')
      .trim();

    return {
      ...node,
      featuredImage: node.featuredImage ? {
        node: {
          ...node.featuredImage.node,
          sourceUrl: fixMediaUrls(node.featuredImage.node.sourceUrl)
        }
      } : undefined,
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

  let nodes: PortfolioItem[] = [];
  try {
    const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query);
    nodes = data?.posts?.nodes || [];
  } catch (err) {
    console.warn("getBlogPosts fallback triggered:", err);
  }

  if (nodes.length === 0) {
    nodes = FALLBACK_BLOG;
  }
  
  return nodes.map(node => ({
    ...node,
    featuredImage: node.featuredImage ? {
      node: {
        ...node.featuredImage.node,
        sourceUrl: fixMediaUrls(node.featuredImage.node.sourceUrl)
      }
    } : undefined,
    excerpt: node.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...'
  }));
}

export async function getTeamMembers(): Promise<PortfolioItem[]> {
  const query = `
    query GetTeamMembers {
      posts(where: { categoryName: "team", orderby: { field: DATE, order: ASC } }, first: 20) {
        nodes {
          title
          slug
          excerpt
          content
          date
        }
      }
    }
  `;

  const data = await wpFetch<{ posts: { nodes: PortfolioItem[] } }>(query);
  const nodes = data?.posts?.nodes || [];
  
  return nodes.map(node => {
    const name = node.title.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
    
    let jobTitle = "";
    let bioHtml = "";

    if (node.content) {
      const splitRegex = /(<\/p>|<br\s*\/?>|<\/h[1-6]>)/i;
      const allParts = node.content.split(splitRegex);
      
      let firstTextIndex = -1;
      for (let i = 0; i < allParts.length; i++) {
        const textSnippet = allParts[i].replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
        if (textSnippet.length > 0) {
          firstTextIndex = i;
          jobTitle = textSnippet;
          break;
        }
      }

      if (firstTextIndex !== -1) {
        bioHtml = allParts.slice(firstTextIndex + 1).join('').trim();
        
        bioHtml = bioHtml.replace(/^(<\/p>|<br\s*\/?>|<\/h[1-6]>)/i, '');
        
        bioHtml = bioHtml
          .replace(/^(<br\s*\/?>|<\/?p[^>]*>|&nbsp;|\s)+/gi, '')
          .replace(/(<br\s*\/?>|<\/?p[^>]*>|&nbsp;|\s)+$/gi, '');
          
        bioHtml = bioHtml.replace(/<br\s*\/?>\s*\.$/i, '');

        if (bioHtml && !bioHtml.startsWith('<')) {
          bioHtml = `<p>${bioHtml}</p>`;
        }
      }
    }

    if (!jobTitle && node.excerpt) {
      jobTitle = node.excerpt.replace(/<[^>]*>?/gm, '').trim();
    }

    jobTitle = jobTitle
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&ndash;/g, '-')
      .replace(/&mdash;/g, '—')
      .replace(/&quot;/g, '"');

    return {
      ...node,
      title: name,
      excerpt: jobTitle,
      content: bioHtml
    };
  });
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
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  let post: PortfolioItem | null = null;
  try {
    const data = await wpFetch<{ post: PortfolioItem }>(query, { id: slug });
    post = data?.post || null;
  } catch (err) {
    console.warn("getPostBySlug fallback check:", err);
  }
  
  if (!post) {
    post = FALLBACK_PORTFOLIO.find(p => p.slug === slug) || null;
  }

  if (post) {
    if (post.featuredImage) {
      post.featuredImage.node.sourceUrl = fixMediaUrls(post.featuredImage.node.sourceUrl);
    }
    if (post.content) {
      const processed = processContent(post.content);
      post.content = processed.fixedContent;
      post.projectUrl = processed.projectUrl;
      post.githubUrl = processed.githubUrl;
    }
  }
  
  return post;
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
  const page = data?.page;
  
  if (page) {
    if (page.featuredImage) {
      page.featuredImage.node.sourceUrl = fixMediaUrls(page.featuredImage.node.sourceUrl);
    }
    if (page.content) {
      const processed = processContent(page.content);
      page.content = processed.fixedContent;
    }
  }
  
  return page;
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
  const page = data?.page;

  if (page) {
    if (page.featuredImage) {
      page.featuredImage.node.sourceUrl = fixMediaUrls(page.featuredImage.node.sourceUrl);
    }
    if (page.content) {
      const processed = processContent(page.content);
      page.content = processed.fixedContent;
    }
  }
  
  return page;
}
