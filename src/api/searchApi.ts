import productsData from "../../mocks/products.json";
import knowledgeArticlesData from "../../mocks/knowledge-articles.json";
import supportTicketsData from "../../mocks/support-tickets.json";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

type KnowledgeArticle = {
  id: number;
  title: string;
  category: string;
  views: number;
  lastUpdated: string;
};

type SupportTicket = {
  id: number;
  customer: string;
  subject: string;
  status: string;
  priority: string;
};

const matchesSearchTerm = (
  item: Product | KnowledgeArticle | SupportTicket,
  searchTerm: string,
) => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  if (!normalizedSearchTerm) {
    return true;
  }

  // search through JSON object values
  return Object.values(item).some((value) =>
    String(value).toLowerCase().includes(normalizedSearchTerm),
  );
};

export const productsApi = async (searchTerm: string): Promise<Product[]> => {
  const results = (productsData as Product[]).filter((product) =>
    matchesSearchTerm(product, searchTerm),
  );

  return new Promise((resolve) => {
    setTimeout(() => resolve(results), 200);
  });
};

export const knowledgeApi = {
  async search(query: string): Promise<KnowledgeArticle[]> {
    const results = (knowledgeArticlesData as KnowledgeArticle[]).filter(
      (article) => matchesSearchTerm(article, query),
    );

    return new Promise((resolve) => {
      setTimeout(() => resolve(results), 200);
    });
  },
};

export const supportTicketsApi = {
  async search(query: string): Promise<SupportTicket[]> {
    const results = (supportTicketsData as SupportTicket[]).filter((ticket) =>
      matchesSearchTerm(ticket, query),
    );

    return new Promise((resolve) => {
      setTimeout(() => resolve(results), 200);
    });
  },
};

export async function globalSearch(query: string) {
  const [products, articles, tickets] = await Promise.all([
    productsApi(query),
    knowledgeApi.search(query),
    supportTicketsApi.search(query),
  ]);

  return {
    products,
    articles,
    tickets,
  };
}
