import styled from "styled-components";
import { getOpenTickets } from "../../api/serviceTicketsApi";
import { getPillColor } from "../../helpers/getPillColor";
import { useQuery } from "../../hooks/useQuery";
import { designTokens } from "../../styles/designTokens";
import { Pill } from "../atoms/Pill";
import { PanelCard } from "../atoms/PanelCard";

type ServiceTicket = {
  id: number;
  status: string;
  priority: string;
};

const TicketTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${designTokens.spacing["space-3"]}px;
`;

const TableHead = styled.thead`
  border-bottom: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
`;

const Th = styled.th`
  text-align: left;
  padding: 0 0 ${designTokens.spacing["space-3"]}px;
  font-size: ${designTokens.font.size.sm}px;
  font-weight: ${designTokens.font.weight.medium};
  color: ${designTokens.color.gray[500]};
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: ${designTokens.spacing["space-3"]}px 0;
  border-top: ${designTokens.border.width.thin}px solid
    ${designTokens.color.gray[200]};
  font-size: ${designTokens.font.size.md}px;
  color: ${designTokens.color.gray[700]};
  text-align: left;
`;

export const ServiceTicketsPanel = () => {
  const {
    data: tickets = [],
    error,
    isLoading,
  } = useQuery<ServiceTicket[]>(getOpenTickets);

  return (
    <PanelCard>
      <h2>Open Service Tickets</h2>
      {isLoading && <p>Loading tickets...</p>}
      {error && <p>Unable to load tickets.</p>}
      <TicketTable>
        <TableHead>
          <tr>
            <Th>Ticket ID</Th>
            <Th>Status</Th>
            <Th>Priority</Th>
          </tr>
        </TableHead>
        <tbody>
          {!isLoading &&
            !error &&
            tickets.map((ticket) => {
              const statusColor = getPillColor("status", ticket.status);
              const priorityColor = getPillColor("priority", ticket.priority);

              return (
                <tr key={ticket.id}>
                  <Td>{ticket.id}</Td>
                  <Td>
                    <Pill text={ticket.status} color={statusColor} />
                  </Td>
                  <Td>
                    <Pill text={ticket.priority} color={priorityColor} />
                  </Td>
                </tr>
              );
            })}
        </tbody>
      </TicketTable>
    </PanelCard>
  );
};
