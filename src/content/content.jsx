import React from "react";
import "./container.style.css";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Container from "react-bootstrap/esm/Container";
import about from "./assets/about.png";
import education from "./assets/education.gif";
import js from "./assets/js.webp";
import html from "./assets/html.jpg";
import css from "./assets/css3.png";
import bootstrap from "./assets/bootstrap.png";
import react from "./assets/react.png";
import {Accordion, AccordionBody, AccordionButton} from "react-bootstrap/Accordion";
import phn from "./assets/icons8-phone-number.gif";
import location from "./assets/Location.svg";
import email from "./assets/emaill.gif";

export const Content = () => {
    return (
        <Container fluid>
        <div className="bg-light">
            <div className="row animae text-start align-items-center justify-content-around" id="home">
                <div className="col-lg-6">
                    <p className="banner_text">Hey, I'm 👋</p>
                    <p className="banner_subtext">Sai Bhavani</p>
                    <p>SOFTWARE ENGINEER</p>
                </div>
            </div>
            <div className="row bg-black align-items-center justify-content-around p-5" id="about">
                <div className="col-lg-5 text-light text-start">
                    <h1 className="py-5">Hello,</h1>
                    <p>
                        👋 I'm Sai Bhavani Govindarajula. I'm working with front-end technologies like HTML, CSS, Bootstrap, JavaScript, ReactJs. What you are seeing now is my portfolio. 
                    </p>
                    <ul>
                        <li>2+ years experienced UI/UX Developer with hands-on experience in online UI tool such as Figma, Photoshop etc.  </li>
                        <li>Translate concepts in userflows, wireframes, mockups and prototypes that lead to intuitive user experiences.</li>
                        <li>Facilitate the client’s product vision by researching, conceiving, sketching, prototyping and user-testing experiences for digital products.</li>
                        <li>Designing and implementing highly-responsive user interface</li>
                        <li>Proficient in designing wireframes and also translating into high-quality code</li>
                    </ul>
                </div>
                <div className="col-lg-5 align-items-center img_animae">
                    <img src={about} height={450}></img>
                </div>
            </div>
            <div className="row align-items-center what gap-5 justify-content-center" id="skills">
                <div className="col-lg-12 text-start">
                    <h1>Skills</h1>
                    </div>
                <div className="col-lg-4 align-items-center border p-4 hovprop">
                    <h4>Designing (UI/UX)</h4>
                    <p>Proficient in using design software such as Figma, Adobe XD, Photoshop etc.</p>

                </div>
                <div className="col-lg-4 align-items-center border p-4 hovprop">
                <h4>Web Development</h4>
                <p>Designing and implementing highly-responsive user interface.</p>
                    
                </div>
                <div className="col-lg-4 align-items-center border p-4 hovprop">
                    <h4>Scrum and Jira</h4>
                    <p>Proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks.</p>
                </div>
            </div>
            <div className="row justify-content-center bg-white  p-5">
                <div className="col-lg-12 text-start p-5">
                    <h1>Programming Languages</h1>
                </div>
                <div className="col-lg-10 text-start">
                    <img src={html} height={70} className="p-2 img_style"></img>HTML
                    <img src={css} height={63} className="p-2 img_style"></img>CSS
                    <img src={bootstrap} height={61} className="p-2 img_style"></img>BOOTSTRAP
                    <img src={js} height={60} className="p-2 img_style"></img>JAVASCRIPT
                    <img src={react} height={60} className="p-2 img_style"></img>REACT
                </div>
            </div>
            <div className="row align-items-center bg-black text-light p-5 justify-content-around" id="education">
                <div className="col-lg-12 text-start py-5">
                    <h1>Education</h1>
                    </div>
                <div className="col-lg-5 text-start college">
                    <p className="edu">Bachelor in Computers</p>
                    <p>Madhira Institute of Technology and Sciences, Kodad</p>
                    <p className="year">2010-2014</p>
                    <p className="edu">Intermediate Education</p>
                    <p>Gouthami Junior College, Miryalaguda</p>
                    <p className="year">2008-2010</p>
                    <p className="edu">Secondary School Education</p>
                    <p>Siddartha school, Nalgonda</p>
                    <p className="year">2010-2014</p>
                </div>
                <div className="col-lg-5 align-items-center">
                    <img src={education} height={450}></img>
                </div>
            </div>
            <div className="row justify-content-center p-5" id="experience">
                <div className="col-lg-12 text-start">
                <h1>Experience</h1>
                    
                </div>
            <div className="row justify-content-center">
            <div class="accordion accordion-flush col-lg-8 p-5" id="accordionFlushExample">
              <div class="accordion-item">
                  <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Associate Software Engineer
                </button>
                  </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <p>2023-2024</p>
                <p>Quara Digital Pvt. Ltd</p>
                <p>➣ Worked in FinTech Application</p>
                <p>➣ Designed different pages through out the application</p>
                <p>➣ Involved in meetings with Business team regarding designs</p>
                <p>➣ Developed Prototypes, website design, website redesign based on analytics date</p>
                <p>➣ Re-designed several internal pages in both web and mobile versions</p>
                <p>➣ Developed responsive webpages by using frontend frameworks</p>
              </div>
            </div>
            </div>
              <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Associate Software Engineer
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>2022-2023</p>
        <p>Ferns N Petals</p>
        <p>➣ Worked in Ecommerce Application</p>
        <p>➣ Design useful and elegant digital experiences across 2 different platforms.</p>
        <p>➣ Colloborate with other designers to maintain design consistency and coherance across features </p>
        <p>➣ Worked on morethan 60 screens both in web and mobile</p>
        <p>Worked for some components in checkout flow in react js</p>
      </div>

    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
Trainee Front-end Developer</button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>2018-2019</p>
        <p>CBAL India Pvt.Ltd      
</p>
    <p>➣ Worked in Hotel Booking applications</p>
    <p>➣ Involved in developing responsive web pages </p>
        </div>
    </div>
  </div>
</div>
        </div >
        </div>

        <div className="footer">
              <div className="row bg-black p-5">
                <h3 className="text-light text-start">LET'S CONNECT</h3>
                    <div className="col-lg-6 text-light p-3 text-start">
                      <div className="p-3">
                     <img src={location} height={30}></img><span className="p-4">Mallampet, Hyderabad</span>
                     </div>
                    <div className="p-3">
                    <img src={phn} height={30}></img><span className="p-3">+917671005625</span>
                    </div>
                    <div className="p-3">
                    <img src={email} height={32}></img><span className="p-3">bhavanisai24@gmail.com</span>
                    </div>
                    </div>
              </div>
        </div>
        </div>
 </Container>
    );
};
