import "./contactUs.css";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="contactUs">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, please feel free to contact us
          using the information below:
        </p>
        <ul>
          <li>Email: corporate@moringaschool.com</li>
          <li>Phone: 0722-000-000</li>
          <li>Address: Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
