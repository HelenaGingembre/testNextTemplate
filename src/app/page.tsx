// import Image from "next/image";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <section id="portfolio" className="portfolio">
        <h2 className="text-about center" data-aos="fade-up">
          My works
        </h2>
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
      <section className="brand-slider">
        <h2 className="center" data-aos="fade-up">
          My clients
        </h2>
        <p></p>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="https://travel-lovers.org/" target="_blank">
                <img src="img/partners_travel.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://dbgs.co.nz/" target="_blank">
                <img src="img/partners_bdgs.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://beekeepers.com.ua/" target="_blank">
                <img src="img/partners_bee.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" target="_blank">
                <img src="img/partners_copro61.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://travel-lovers.org/" target="_blank">
                <img src="img/partners_travel.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://spartacusfunds.com/" target="_blank">
                <img src="img/spartacus_part.jpg" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://dbgs.co.nz/" target="_blank">
                <img src="img/partners_bdgs.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://beekeepers.com.ua/" target="_blank">
                <img src="img/partners_bee.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" target="_blank">
                <img src="img/partners_copro61.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://travel-lovers.org/" target="_blank">
                <img src="img/partners_travel.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://spartacusfunds.com/" target="_blank">
                <img src="img/spartacus_part.jpg" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://dbgs.co.nz/" target="_blank">
                <img src="img/partners_bdgs.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://beekeepers.com.ua/" target="_blank">
                <img src="img/partners_bee.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" target="_blank">
                <img src="img/partners_copro61.png" alt="" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://travel-lovers.org/" target="_blank">
                <img src="img/partners_travel.png" alt="" />
              </a>
            </div>
            `
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2 className="center">Contact Me</h2>
        <div id="form-messages"></div>
        <form
          id="ajax-contact"
          action="script/mailer.php"
          className="form-area"
        >
          <div className="form-content">
            <div className="details-area">
              <label>Name</label>
              <input type="text" name="name" id="name" required />

              <label>Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="msg-area">
              <label>Message</label>
              <textarea id="msg" name="msg" required></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* <div className="footer-spacer"></div>
      <footer>
        <div className="footer-content">
          <span>Are you ready to get your site?</span>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="social-row">
          <a href="https://www.facebook.com/lammitta" target="_blank">
            <i className="socicon-facebook"></i>
          </a>

          <a
            href="https://plus.google.com/u/0/111211904044310768070"
            target="_blank"
          >
            <i className="socicon-googleplus"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/helen-izotova-548929124/"
            target="_blank"
          >
            <i className="socicon-linkedin"></i>
          </a>
        </div>
        <div className="footer-contact-container">
          <div>
            <p>
              ©2018 <a href="#">GIH</a>
            </p>
          </div>
          <div>
            <p>Ukraine &amp; Kyiv</p>
            <p>Luxembourg &amp; Luxembourg</p>
          </div>
          <div></div>
          <div>
            <a href="mailto:e.izotovagingembre@outlook.com">
              e.izotovagingembre@outlook.com
            </a>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Home;
