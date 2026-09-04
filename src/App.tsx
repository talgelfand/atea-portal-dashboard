import { useCallback, useState } from "react";
import styled from "styled-components";

import { NotificationsPanel } from "./components/InfoSection/NotificationsPanel";
import { ProfileData } from "./components/InfoSection/ProfileData";
import { RecentOrders } from "./components/InfoSection/RecentOrders";
import { ServiceTicketsPanel } from "./components/InfoSection/ServiceTicketsPanel";
import { SearchInput } from "./components/atoms/SearchInput";

import { globalSearch } from "./api/searchApi";
import { SearchResultsSection } from "./components/SearchPanel/SearchResultsSection";
import { useDebounce } from "./hooks/useDebounce";
import { useQuery } from "./hooks/useQuery";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px 200px;
`;

const LeftPanelGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  align-content: flex-start;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // Wait until the user pauses typing before searching.
  const debouncedSearchTerm = useDebounce(searchTerm);
  const search = useCallback(
    () => globalSearch(debouncedSearchTerm),
    [debouncedSearchTerm],
  );
  const { data: searchResults, error, isLoading } = useQuery(search);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Grid>
      <LeftPanelGrid>
        <ProfileData />
        <ServiceTicketsPanel />
        <RecentOrders />
        <NotificationsPanel />
      </LeftPanelGrid>
      <div>
        <h2>Search for products, articles, and tickets</h2>
        <SearchInput value={searchTerm} onChange={handleSearch} />
        {isLoading && searchTerm && <p>Searching...</p>}
        {error && <p>Unable to complete search.</p>}
        {!isLoading && !error && (
          <SearchResultsSection
            products={searchResults?.products ?? []}
            articles={searchResults?.articles ?? []}
            tickets={searchResults?.tickets ?? []}
          />
        )}
      </div>
    </Grid>
  );
}

export default App;
