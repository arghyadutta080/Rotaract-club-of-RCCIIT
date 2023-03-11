import React from "react";
// import style.css
import "./style.css";
import about_1 from "../../Images/Home Images/about_1.jpg";



// import React from 'react'

function About() {
  return (
    <div>
      <section id="about">
            <div className="Who-We-Are">
              <img src={about_1} />
              <div className="Who-We-Are-info">
                <h1>Who We Are</h1>
                <p>Rotaract Club of RCCIIT was chartered in the final days of Rota Year 2016-17 under the leadership of PP Rtn. Chirabrata Majumdar of Rotary Club of Calcutta Renaissance. We started our journey under the leadership of our Charter President Rtr. Awsaf Amber and DRR Rtr. Pradip Dutta, and on this day of installing with our 6th President of the club, we have only grown in all areas. The Presidential theme of this year is Agitate. Aspire. Achieve</p>
              </div>
            </div>
          </section>
    </div>
  )
}

export default About


// export var MyClass = React.createClass({
//     render: function() {
//       return (
//         <div>
//           {/* <meta charSet="UTF-8" />
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Document</title>
//           <link rel="stylesheet" href="style.css" /> */}
          
//           {/*footer*/}
//           <footer className="text-center" />
//         </div>
//       );
//     }
//   });