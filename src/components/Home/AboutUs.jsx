import React from "react";
import about_1 from "../../Images/Home Images/about_1.jpg";


function About() {
  return (
    <div>
      <section style={{ background: "#E3DBEA" }} >
        <div className="d-flex flex-wrap justify-content-center align-items-center border" style={{  paddingBottom: "60px", paddingTop: "60px" }} >
          <div className="">
            <img src={about_1} style={{ width: "450px", paddingLeft: "50px", paddingRight: "50px" }} />
          </div>
          <div style={{ minWidth: "450px", maxWidth: "750px" }} className="d-flex flex-column justify-content-center align-items-center mb-4 pt-5">
            <div style={{ fontFamily: "Lora" }} className="display-4 pb-3">Who We Are</div>
            <div className="fw-normal fst-italic lh-lg fs-5" style={{ width: "80%" }}>Rotaract District Organisation, RID 3291 happens to be the largest youth organisation that is active in the city of Kolkata & it's suburbs with 92 active and running clubs with a membership count close to 2500. Formed in 2008, after it was redistricted from erstwhile district 3290. It covers Kolkata and 11 other revenue districts of Southern West Bengal and Andaman and Nicobar Islands in India.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About