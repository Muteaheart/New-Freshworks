import React, {useState} from "react";
import "./App.css"
// import mutiatM from "./Map images/mutiatM.jpg"
// import BashOye from "./Map images/BashOye.jpg"
// import balikisM from "./Map images/balikisM.jpg"
// import HammedOye from "./Map images/HammedOye.jpg"
// import ummahJemima from "./Map images/ummahJemima.jpg"
// import MercyJ from "./Map images/MercyJ.jpg"
// import mayaAng from "./Map images/mayaAng.jpg"
// import Anonymous from "./Map images/Anonymous.jpg"

function App () {
//  Function for holding databse
  const [text, setText] = useState("");
  const [OAUStudent, setOAUStudent] = useState([

  { 
    id: 1,
    Name: "Mutiat Mustapha",
    Class: "300 Level",
    Age: 25,
    Comment: "Organizer"
  },
  {
    id: 2,
    Name: "Oyedokun Bashiru",
    Class: " 500 Level",
    Age: 28,
    Comment: "Chaperon"
  },
  {
    id: 3,
    Name: "Balikis Mustapha",
    Class: "100 Level",
    Age: 16,
    Comment: "Minor"
    },
  {
    id: 4,
    Name: "Hammed Oyedokun",
    Class: "600 Level",
    Age: 28,
    Comment: "Chairman"
  },
  {
   id: 5,
    Name: "Ummah Jemima",
    Class: " 400 Level",
    Age: 29,
    Comment: "Writer"
  },
  {
    id: 6,
    Name: "Jonathan Mercy",
    Class: "200 Level",
    Age: 21,
    Comment: "Asisst"
  },
  {
    id: 7, 
    Name: "Maya Angelou",
    Class: "300 Level",
    Age: 35,
    Comment: "Poet"
  },
]);

const Post = ()=> {
  const items ={
    id : OAUStudent.length + 1,
    Name: text,
  };
  setOAUStudent ([...OAUStudent, items]);
  setText ("");
};

  return (
<div className="ContainCard">
  <br/>
  <input value={text} onChange={(e)=>{setText(e.target.value)

  }} placeholder="Input Name"/>
  <br/>
  <button onClick={()=> {Post()}}> Post</button>
  {OAUStudent.map((props)=>(
    <div className="Card">
      <div>Name:{props.Name}</div>
      <div>Age:{props.Age}</div>
      <div>Class:{props.Class}</div>
      <div>Comment:{props.Comment}</div>
    </div>
  ))} 
</div>

  )
}

export default App



// import React from "react"
// import "./App.css"
// import Logo from "./Freshworks images/blackLogo.png"
// import Globe from "./Freshworks images/globe.png"
// import Wman from "./Freshworks images/Wman.jpg"
// import LeftHuman from "./Freshworks images/LeftHuman.jpg"
// import YellowImage from "./Freshworks images/yellow.png"
// import dollar from "./Freshworks images/dollar.png"
// import purple from "./Freshworks images/purple.png"
// import compass from "./Freshworks images/compass.png"
// import pearson from "./Freshworks images/pearson.png"
// import brewdog from "./Freshworks images/brewdog.png"
// import bridgestone from "./Freshworks images/bridgestone.png"
// import travix from "./Freshworks images/travix.png"
// import klarna from "./Freshworks images/klarna.png"
// import vicemedia from "./Freshworks images/vicemedia.png"
// import deichman from "./Freshworks images/deichman.png"
// import waterson from "./Freshworks images/waterson.png"
// import fiver from "./Freshworks images/fiver.png"
// import exabytes from "./Freshworks images/exabytes.png"
// import shoil from "./Freshworks images/shoil.png"
// import multichoice from "./Freshworks images/multichoice.png"
// import bluenile from "./Freshworks images/bluenile.png"
// import trainline from "./Freshworks images/trainline.png"
// import engels from "./Freshworks images/engels.png"
// import itv from "./Freshworks images/itv.png"
// import delivery from "./Freshworks images/delivery.png"
// import katz from "./Freshworks images/katz.png"
// import watersonQ from "./Freshworks images/watersonQ.jpg"
// import dots from "./Freshworks images/dots.png"
// import mangreen from "./Freshworks images/mangreen.jpg"
// import threepeople from "./Freshworks images/threepeople.png"
// import blacklady from "./Freshworks images/blacklady.jpg"
// import womanman from "./Freshworks images/womanman.jpg"
// import panel from "./Freshworks images/panel.png"
// import FW from "./Freshworks images/FW.jpg"
// import facebook2 from "./Freshworks images/facebook2.png"
// import twitter2 from "./Freshworks images/twitter2.png"
// import youtube from "./Freshworks images/youtube.png"
// import linkedin from "./Freshworks images/linkedin.png"
// import glassdoor from "./Freshworks images/glassdoor.png"


// function App () {
//   return (
//     <div className="Container">
//       <div className="FirstContainer">
//         <div className="ContainerWrapper">
//         <div><img src={Logo} className="Logo"/></div>
//         <div className="Navigations">
//           <p>Products</p>
//           <p>Platform</p>
//           <p>Company</p>
//           <p>Resources</p>
//           <p>Customers</p>
//           <p>Support</p>
//           <div><img src={Globe} className="Globe"/></div>
//         </div>
//         </div>  
//       </div>

//       <div className="Container2">
//         <div className="Left">
// <div className="Delight"> Delight made <br/> easy</div> <br/>
// <div className="We">We make it fast and easy for your business to delight <br/> customers and employees.</div> <br/>
// <div className="Buttons">
// <button className="Free">FREE TRIALS</button>
// <button className="Contact">CONTACT SALES</button>
// </div>
//         </div>

//         <div className="Right">
//          <img src={Wman} className="Wman"/>
//         </div>

//       </div>
//       <div className="Container3">
//         <div className="LeftHuman">
//           <img src={LeftHuman} className="LeftHuman"/></div>

// <div>
// <div className="RightWords">
//           <div>Try the business software used by over <br/>
//             50,000 companies accross the globe to<br/>
//             exceed customer and employee<br/>
//             expectations.
//           </div></div>
          
//           <div className="ButTag">
//             <div className="LeftBut"> 
//               <button className="B1">Customer Service</button><br/>
//               <button className="B2">HR Management</button><br/>
//               <button className="B3">Marketing Automation</button>
//               </div>

//           <div className="RightBut">
//             <button className="RB1">IT Service Management</button><br/>
//             <button className="RB2">Sales Automation</button><br/>
//             <button className="RB3">All Products & Trials</button>
//             </div>
//             </div>
// </div>  
//       </div>
//       <div className="Container4">
//     <div className="TopContain">
//     <p>
//       <div><h1 className="Friction">Frictionless, simple, easy </h1><br/></div>
//     <div className="Fresh">Freshworks makes it faster and easy for businesses to delight their customers and employees. <br/></div>
//     We take a fresh approach to how businesses discover, engage with, and realize value software throughout their journey.
//     </p>
//     </div>

//     <div className="MiddleContain">
//       <div className="RightContain">
//           <div>
//             <img src={YellowImage} className="YellowImage"/></div>
//           <div className="GetUp"> <h2>Get up and running with no barriers</h2></div>
//           <div className="Try">
//             <h3>Try or purchase pur software directly from our website, <br/>
//              and onboard in a matter of days, not months. </h3></div>
//           <button className="StartTrial">
//            <h3> Start free trial -></h3></button>
//       </div>

//       <div className="LeftContain">
//         <div>
//           <img src= {dollar} className="dollar"/></div>
//           <div className="Choose"> <h2>Choose your pricing plan</h2></div>
//           <div className="Pricing">
//             <h3>Our pricing plans are designed for modern business use <br/>
//             cases and affordable for organizations of all sizes.</h3></div>
//           <button className="See">
//             <h3>See pricing -> </h3></button>
//           </div>
//     </div>
// </div>

// <div className="contain41">
// <div className="Leftdown">
//   <div className="Purple">
//     <img src={purple} className="purple"/></div>
//   <div className="Build">
//     <h2>Build and customize as you go</h2></div>
//   <div className="Extend"> <h3>Extend and tailor expreicenes to meet your unique <br/>
//     business needs, with low-code development and over 1,100 <br/>
//     custome apps made available on out marketplace.</h3></div>
//   <button className="Visit"> <h3>Visit marketplace -> </h3></button>

// </div>
// <div className="Rightdown">
//   <div>
//     <img src={compass} className="compass"/></div>
//   <div className="Create">
//     <h2>Create value, fast</h2></div>
//   <div className="Accelerate">
//     <h3>Accelerate your team's productivity and efficiency with <br/>
//     modern automation and collaboration tools, to get tangible <br/>
//     results in no time.</h3></div>
//   <button className="Learn"> <h3>Learn how -></h3></button>
//   </div>
//       </div>
//     <div className="Container5">
//       <div className="Contain51">
// <div> <h1>Trusted by 50K+ customers big and small <br/></h1></div>
// <div className="We"> <h5>We are a leading provider of modern SaaS solutions that solve multiple, complex businesss problems to companies of all sizes. Business from <br/>
// more than 120 countries around the world use Freshworks' products to delight their customers and employees every day.</h5></div>
//       </div>
     
//       <div className="Contain52">
        
//         <div className="Line1">

//           <img src={pearson} className="pearson"/>
//           <img src={brewdog} className="brewdog"/>
//           <img src={bridgestone} className="bridgestone"/>
//           <img src={travix} className="travix"/>
//           <img src={klarna} className="klarna"/>
//           <img src={vicemedia} className="vicemedia"/>
//           </div>
          

//         <div className="Line2">
//         <img src={deichman} className="deichman"/>
//         <img src={waterson} className="waterson"/>
//         <img src={fiver} className="fiver"/>
//         <img src={exabytes} className="exabytes"/>
//         <img src={shoil} className="shoil"/>
//         <img src={multichoice} className="multichoice"/>
//           </div>


//         <div className="Line3">
//         <img src={bluenile} className="bluenile"/>
//         <img src={trainline} className="trainline"/>
//         <img src={engels} className="engels"/>
//         <img src={itv} className="itv"/>
//         <img src={delivery} className="delivery"/>
//         <img src={katz} className="katz"/>
//          </div>
//         </div>
        
//         <div className="Container6">
// <div className="waterquote">
//     <img src={watersonQ} className="watersonQ"/></div>
   
//     <div className="Fteam">
//       <h6>"The Freshworks team was a great asset suring implementation and continue to be a key partner <br/>
//         for Waterstons as we look to further mature and improve our services to customers, tailored to <br/>
//         <p className="results">their specific needs" </p></h6></div>
//         <div className="Alex"><h5>Alex Bookless, Head of Managed Services, Waterstons </h5></div>

//         <div className="dots">
//           <img src={dots} className="dots"/>
//         </div>
// </div>
// <div className="Container7">
//   <div className="Aspire"> <h1>We aspire to be one of the most loved companies in the world</h1></div>
//   <div className="Pix">
//     <img src={mangreen} className="mangreen"/>
//     <img src={threepeople} className="threepeople"/>
//     <img src={blacklady} className="blacklady"/>
//     <img src={womanman} className="womanman"/>
//       </div></div>
// <div className="BigCul">
//   <div className="Culture">
//    <div className="Cul">Culture</div>
//    <div className="Diver">Diversity</div>
//    <div className="Exp">Experience</div>
//    <div className="Team">Team</div></div>
//    </div>
//   <div className="LifeContain"><button className="life">See life at Freshworks</button> </div>


// <div className="Container8">
// <div><h1 className= "Ready"> Ready to get started?</h1><br/></div>
// <div className="Join">
//   <h3>Join our community of 50,000+ companies of all sizes who use Freshworks' modern SaaS products to make it fast and east to <br/></h3></div>
//   <p className="Customers"><h3>delight their customers and employees.</h3></p>
//   <div className="Sales">
//   <button className="CS">CONTACT SALES</button></div>
// </div>
// <div className="BigCon">
// <div className="Container9">
// <div className="FWCon">
//   <img src={FW} className="FW"/></div>
  
//   <div className="lists">
//     <li>Freshdesk</li>
//     <li>Freshsales</li>
//     <li>Freshmarketer</li>
//     <li>Freshservice</li>
//     <li>Freshteam</li></div> </div>

//     <div className="Company">
//      <div><h5> COMPANY </h5> 
//      <li>About    </li>
// <li>Board of Directors</li>
// <li>Investors</li>
// <li>Customers</li>
// <li>Affiliates</li>
// <li>Partners</li>
// <li>Philanthropy</li>
// <li>Careers</li>
// <li>News room</li>
// <li>GDPR</li>
// <li>Tax FAQs</li>
// <li>Contact us</li></div></div>

//     <div className="Social"> 
//     <div className="with">CONNECT WITH US</div>
//       <div className="F1">
// <img src = {facebook2} className="facebook2"/>
// <img src= {twitter2} className="twitter2"/>
// <img src = {youtube} className="youtube"/> </div>
      
//       <div className="F2">
//         <img src={linkedin} className="linkedin"/>
// <img src={glassdoor} className="glassdoor"/>
//       </div>
//       </div>
//     </div>
//     <div className="Footer">
//       <div className="Terms">
//         Terms of service - Privacy Notice - Takedown Policy - GDPR - Security - CS Policy - Tax FAQs - Unsubscribe</div>


//       <div className="copyright">Copyright (c) Freshworks Inc. All Rights Reserved</div>

//     </div>
// </div>
//     </div>
//   );
// };

// export default App;


