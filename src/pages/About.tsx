import IconLogoCss3 from "../components/icons/IconCss";
import IconHtml5 from "../components/icons/iconHtml";
import IconLogoJavascript from "../components/icons/IconJavascript";
import IconLogoReact from "../components/icons/IconLogoReact";
import IconMongodb from "../components/icons/IconMongo";
import IconNextjs from "../components/icons/IconNext";
import IconLogoNodejs from "../components/icons/IconNode";
import IconRedux from "../components/icons/IconRedux";
import IconSass from "../components/icons/IconSass";
import IconTailwind from "../components/icons/IconTailwind";
import IconLanguageTypescript from "../components/icons/IconTypescript";
import IconWordpress from "../components/icons/IconWordpress";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionTitle mainTitle={"About me"} />
      <div className="slide-show-content center mb-10 ">
        <p data-aos="fade-left">
          <span className="text-orange italic bold"> I design</span> and{" "}
          <span>code</span> beautifully simple things, and I love what I do.
          <span className="text-accent"> I make code</span> from scratch, and
          enjoy bringing ideas to life in the browser.
          <span> I create</span> small and medium websites. The main tools of my
          work:
        </p>
      </div>
      <ul className="list-tech">
        <li className="">
          <IconHtml5 />
          <span>Html5</span>
        </li>
        <li>
          <IconLogoCss3 />
          <span>CSS3</span>
        </li>
        <li>
          <IconSass color="#F754A9" />
          <span>Sass</span>
        </li>
        <li>
          <IconLogoJavascript />
          <span>JavaScrip</span>
        </li>
        <li>
          <IconLogoReact />
          <span>React.js</span>
        </li>
        <li>
          <IconNextjs />
          <span>Next</span>
        </li>
        <li>
          <IconRedux />
          <span>Redux</span>
        </li>
        <li>
          <IconLanguageTypescript />
          <span>TypeScript</span>
        </li>
        <li>
          <IconWordpress />
          <span>Wordpress</span>
        </li>
        <li>
          <IconTailwind />
          <span>Tailwind</span>
        </li>
        <li>
          <IconMongodb />
          <span>MongoDB</span>
        </li>
        <li>
          <IconLogoNodejs />
          <span>Node.js</span>
        </li>
      </ul>
    </section>
  );
};

export default About;
