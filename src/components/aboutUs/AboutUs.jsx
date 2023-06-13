import "./aboutUs.css";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

function AboutUs() {
  return (
    <>
      <NavBar />
      <h2>About Us</h2>
      <div className="aboutUs">
        <div className="personContainer">
          <div className="grid">
            <h3>Kenneth Wanguka</h3>
            <p className="personInfo">
              The Software Developer and class leader
            </p>
            <img
              src="./images/Ken.png"
              alt="Background"
              className="personImage"
            />
          </div>
          {/* <hr></hr> */}
          <div className="grid">
            <h3>Abinel Kiragu</h3>
            <p>Web Designer</p>
            <img
              src="./images/Abinel.png"
              alt="Background"
              className="personImage"
            />
          </div>

          <hr></hr>
          <div className="grid">
            <h3>Maureen Omamo</h3>
            <p>Group Scrum Master</p>
            <img
              src="./images/Moh.png"
              alt="Background"
              className="personImage"
            />
          </div>
          <div className="grid">
            <h3>Mike Makol</h3>
            <p>Graphics Designer</p>
            <img
              src="./images/Mike.png"
              alt="Background"
              className="personImage"
            />
          </div>
          <div className="grid">
            <h3>Dyphnah Nyamongo</h3>
            <p>Travelling Agent</p>
            <img
              src="./images/Dyphnah.png"
              alt="Background"
              className="personImage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
