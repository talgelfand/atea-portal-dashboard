import { KnowledgeArticleEntry } from "./KnowledgeArticleEntry";
import { ProductEntry } from "./ProductEntry";
import { SupportTicketEntry } from "./SupportTicketEntry";

type ProductResult = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
};

type ArticleResult = {
  id: number;
  title: string;
  views: number;
  lastUpdated: string;
  category: string;
};

type TicketResult = {
  id: number;
  customer: string;
  subject: string;
  status: string;
  priority: string;
};

type SearchResultsSectionProps = {
  products?: ProductResult[];
  articles?: ArticleResult[];
  tickets?: TicketResult[];
};

export const SearchResultsSection = ({
  products = [],
  articles = [],
  tickets = [],
}: SearchResultsSectionProps) => {
  if (products.length === 0 && articles.length === 0 && tickets.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <>
      {products.length > 0 && (
        <>
          <h3>{"Products"}</h3>
          {products.map((product) => (
            <ProductEntry key={product.id} product={product} />
          ))}
        </>
      )}

      {articles.length > 0 && (
        <>
          <h3>{"Knowledge Articles"}</h3>
          {articles.map((article) => (
            <KnowledgeArticleEntry key={article.id} article={article} />
          ))}
        </>
      )}

      {tickets.length > 0 && (
        <>
          <h3>{"Support Tickets"}</h3>
          {tickets.map((ticket) => (
            <SupportTicketEntry key={ticket.id} ticket={ticket} />
          ))}
        </>
      )}
    </>
  );
};
