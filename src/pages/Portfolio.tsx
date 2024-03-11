import FilterListButton from "../components/layout/FilterListButton";
import ListProjects from "../components/layout/ListProjects";
import SectionTitle from "../components/SectionTitle";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <SectionTitle mainTitle={"My projects"} data-aos="fade-up" />
      {/* <FilterListButton /> */}
      <ListProjects />
    </section>
  );
};

export default Portfolio;
