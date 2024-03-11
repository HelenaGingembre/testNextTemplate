import ListClients from "../components/layout/ListClients";
import SectionTitle from "../components/SectionTitle";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <SectionTitle mainTitle={"My clients"} />
      <ListClients />
    </section>
  );
};

export default Clients;
