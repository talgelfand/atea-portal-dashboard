import styled from "styled-components";
import { getRecentOrders } from "../../api/recentOrdersApi";
import { getPillColor } from "../../helpers/getPillColor";
import { useQuery } from "../../hooks/useQuery";
import { designTokens } from "../../styles/designTokens";
import { Pill } from "../atoms/Pill";
import { PanelCard } from "../atoms/PanelCard";

type RecentOrder = {
  orderNumber: string;
  total: number;
  shipmentStatus: string;
};

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${designTokens.spacing["space-3"]}px;
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

export const RecentOrders = () => {
  const {
    data: orders = [],
    error,
    isLoading,
  } = useQuery<RecentOrder[]>(getRecentOrders);

  return (
    <PanelCard>
      <h2>Recent Orders</h2>
      {isLoading && <p>Loading orders...</p>}
      {error && <p>Unable to load orders.</p>}
      <OrdersTable>
        <thead>
          <tr>
            <Th>Order number</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            !error &&
            orders.map((order) => {
              const shipmentColor = getPillColor(
                "shipment",
                order.shipmentStatus,
              );

              return (
                <tr key={order.orderNumber}>
                  <Td>{order.orderNumber}</Td>
                  <Td>${order.total.toFixed(2)}</Td>
                  <Td>
                    <Pill text={order.shipmentStatus} color={shipmentColor} />
                  </Td>
                </tr>
              );
            })}
        </tbody>
      </OrdersTable>
    </PanelCard>
  );
};
