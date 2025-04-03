import SectionTitle from "../../components/SectionTitle";

const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <SectionTitle mainTitle={"Contact Me"} data-aos="fade-up" />

      <div id="form-messages"></div>
      <form id="ajax-contact" action="script/mailer.php" className="form-area">
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
  );
};

export default Contacts;
