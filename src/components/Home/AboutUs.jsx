import React from "react";
import about_1 from "../../Images/Home Images/about_1.jpg";


function About() {
  return (
    <div>
      <section style={{ background: "#C4A7E7" }} >
        <div className="d-flex flex-wrap justify-content-center border" style={{ paddingLeft: "50px", paddingRight: "50px", paddingBottom: "120px", paddingTop: "120px" }} >
          <div className="">
            <img src={about_1} style={{ width: "450px" }} />
          </div>
          <div style={{ width: "50%" }} className="d-flex flex-column justify-content-center align-items-center pr-0 pt-4 pb-4">
            <div style={{ fontFamily: "Lora" }} className="display-4 pb-4">Who We Are</div>
            <div className="fw-normal fst-italic lh-lg fs-5" style={{ width: "80%" }}>Rotaract District Organisation, RID 3291 happens to be the largest youth organisation that is active in the city of Kolkata & it's suburbs with 92 active and running clubs with a membership count close to 2500. Formed in 2008, after it was redistricted from erstwhile district 3290. It covers Kolkata and 11 other revenue districts of Southern West Bengal and Andaman and Nicobar Islands in India.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About