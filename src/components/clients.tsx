import ListClients from "./layout/ListClients";
import SectionTitle from "./SectionTitle";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <SectionTitle mainTitle={"My clients"} />
      <ListClients />
    </section>
  );
};

export default Clients;
