import ListProjects from "./ListProjects";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <SectionTitle mainTitle={"My projects"} data-aos="fade-up" />

      <ListProjects />

      {/* <h2 className="text-about center" data-aos="fade-up">
          My works
        </h2> */}
      <p>Take a look at some of my recent projects. Сlick on the button</p>
      <div className="toggles center">
        <button id="showall">Show All</button>
        <button id="webwordpress">Wordpress</button>
        <button id="webdev">Yii2 Framework</button>
        <button id="graphd">Landing Page</button>
      </div>
      <div className="posts">
        <div className="post webdev graphd" data-aos="fade-right">
          <picture>
            <img src="./img/beekeepers_ua.webp" alt="beekeepers project" />
          </picture>
        </div>
        <div className="post webdev graphd" data-aos="fade-down">
          <picture>
            <img src="./img/spartacus.webp" alt="spartacus project" />
          </picture>
        </div>
        <div className="post webwordpress graphd" data-aos="fade-left">
          <picture>
            <img src="./img/copro61.webp" alt="copro61 project" />
          </picture>
        </div>
        <div className="post webdev graphd" data-aos="fade-right">
          <picture>
            <img src="./img/guillaumehelena1.webp" alt="wedding project" />
          </picture>
        </div>
        <div className="post webwordpress" data-aos="fade-left">
          <picture>
            <img src="./img/travel_lovers_org.webp" alt="travel project" />
          </picture>
        </div>
        <div className="post webwordpress graphd" data-aos="fade-right">
          <picture>
            <img src="./img/travel_lovers_org2.webp" alt="travel project" />
          </picture>
        </div>

        <div className="post webwordpress graphd" data-aos="fade-up">
          <picture>
            <img src="./img/guillaumehelena2.webp" alt="wedding project" />
          </picture>
        </div>
        <div className="post webwordpress graphd" data-aos="fade-left">
          <picture>
            <img src="./img/guillaumehelena3.webp" alt="wedding project" />
          </picture>
        </div>
      </div>

      <div id="modal01" className="modal black">
        <span className="button black xxlarge display-topright">&times;</span>
        <div className="modal-content animate-zoom center transparent">
          <img id="img01" className="img-modal" />
          <p id="caption"></p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
