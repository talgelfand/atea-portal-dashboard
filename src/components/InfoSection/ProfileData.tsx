import { getCustomerData } from "../../api/customerApi";
import { useQuery } from "../../hooks/useQuery";
import { PanelCard } from "../atoms/PanelCard";

type Customer = {
  id: number;
  name: string;
  email: string;
  organization: string;
};

export const ProfileData = () => {
  const {
    data: customer,
    error,
    isLoading,
  } = useQuery<Customer>(getCustomerData);

  if (isLoading) {
    return <PanelCard>Loading profile...</PanelCard>;
  }

  if (error || !customer) {
    return <PanelCard>Unable to load profile.</PanelCard>;
  }

  return (
    <PanelCard>
      <h2>{customer.name}</h2>
      <p>{customer.email}</p>
      <p>{customer.organization}</p>
    </PanelCard>
  );
};
