import React from "react";
import about_1 from "../../Images/Home Images/about_1.jpg";


function About() {
  return (
    <div>
      <section style={{ background: "#E3DBEA" }} >
        <div className="d-flex flex-wrap justify-content-center align-items-center border" style={{  paddingBottom: "50px", paddingTop: "50px" }} >
          <div className="py-2">
            <img src={about_1} style={{ width: "430px", paddingLeft: "50px", paddingRight: "50px" }} />
          </div>
          <div style={{ minWidth: "450px", maxWidth: "750px" }} className="d-flex flex-column justify-content-center align-items-center mb-4 pt-4">
            <div style={{ fontFamily: "Lora" }} className="display-5 pb-3 pt-2">Who We Are</div>
            <div className="fw-semibold fst-italic lh-lg fs-6" style={{ width: "76%" }}>
              <p>
                Rotaract Club of RCCIIT, founded in 2017, by the students of RCC Institute of Information Technology, is a registered body under Rotary International, mentored and sponsored by Rotary Club of Calcutta Renaissance.
              </p>
              <p>
                We, at RC-RCCIIT, are a group of around 90 people dedicated to transforming society through our visionary goals. We organise events to help uplift, the poor and underprivileged, professional development events to boost the culture of professionalism amongst students, help organise fundraisers for important causes. Our motto for 2022-23 is "Agitate.Aspire.Achieve."
              </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About