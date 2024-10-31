import React from "react";
import "./container.style.css";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import about from "../assets/about.webp";
import banner from "../assets/Banner.webp";
import planning from "../assets/planning.webp";
import Environ from "../assets/Environmental.webp";
import client from "../assets/client.webp";


export const Content = () => {
    return (
        <Container fluid>
        <div className="bg-light">
            <div className="row animae text-start align-items-center">
                <div className="col-lg-6">
                    <p className="banner_text">Partner in Streamlining Transportation Solutions.</p>
                    <p className="banner_subtext">We Ensure a seamless and efficient commuting experience for employees.</p>
                    <Button className="request_btn">Request a Demo</Button>
                </div>
            </div>
            <div className="row bg-black align-items-center justify-content-center about">
                <div className="col-lg-5 text-light text-start">
                    <h1>About Us</h1>
                    <p>Welcome to Raft Wheel:</p>
                    <p>Your Partner in Streamlining Transportation Solutions</p>
                    <p>At Raft Wheel, we specialize in providing comprehensive solutions to optimize and  streamline the transportation needs of businesses for their workforce. With a focus  on efficiency, reliability, and innovation, we are your trusted partner in enhancing                    </p>
                    <p> your company's mobility infrastructure.</p>
                </div>
                <div className="col-lg-5 align-items-center img_animae">
                    <img src={about} height={450}></img>
                </div>
            </div>
            <div className="row align-items-center what justify-content-center">
                <div className="col-lg-7 text-start">
                    <h1>What we do</h1>
                    <p>At our employee transport management company, we specialize in providing comprehensive solutions to optimize and streamline the transportation needs of businesses for their workforce. Our services encompass a wide range of offerings tailored to meet the unique requirements of each client, ensuring a seamless and efficient commuting experience for employees. Here's what we do:
                    </p>
                </div>
                <div className="col-lg-5 align-items-center">

                </div>
            </div>
            <div className="row align-items-center justify-content-center bg-white  p-5">
                <div className="col-lg-7 text-start  p-5">
                    <h4>Route Planning and Optimization:</h4>
                    <p>We design customized transport routes based on the locations of employees, considering factors such as residential areas, office locations, and shift timings. Our advanced route optimization algorithms ensure the most efficient use of resources, minimizing travel time and reducing costs.</p>
                    <h4>Fleet Management:</h4>
                    <p>We manage a fleet of vehicles tailored to the specific needs of each client, ensuring the availability of vehicles equipped with modern amenities and safety features. Our fleet management solutions include vehicle maintenance, scheduling, and tracking to ensure reliability and safety.</p>
                    <h4>Employee Communication and Engagement:</h4>
                    <p>We provide transparent and timely communication with employees regarding transportation schedules, route changes, and service updates. Our mobile app and communication channels enable employees to access real-time information and provide feedback, fostering engagement and satisfaction. </p>
                </div>
                <div className="col-lg-5 align-items-center">
                    <img src={planning} height={450}></img>
                </div>
            </div>
            <div className="row align-items-center justify-content-center bg-white p-5">
                <div className="col-lg-5 text-start  p-5">
                    <h4>Client Collaboration and Support:</h4>
                    <p>We work closely with our clients to understand their unique requirements and preferences, providing personalized support and collaboration throughout the engagement. Our dedicated account managers ensure that clients receive responsive and
                    </p>
                    <h4>Continuous Improvement:

                    </h4>
                    <p>We are committed to continuous learning and improvement, regularly analyzing data, gathering feedback, and implementing best practices to enhance the quality and effectiveness of our transportation services. Our focus on continuous improvement ensures that we deliver value-added solutions that drive positive outcomes for our clients and their employees.

                    </p>
                </div>
                <div className="col-lg-5 align-items-center">
                    <img src={client} height={450}></img>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 align-items-center ">
                    <p>Overall, our employee transport management company aims to alleviate the transportation challenges faced by businesses, enabling them to focus on their core operations while we handle the complexities of workforce mobility with efficiency, reliability, and excellence.
                    </p>
                </div>
            </div>
            <div className="bg-black p-5">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="text-light"> Industry Leading Outcomes </div>
                    <div><Button className="request_btn">Know More</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 bg-light">
                <div class="media info-color p-2 d-flex">
                          <a class="pr-3" href="#">
                            <img src="./Images/Group 38429.svg" height="30px"
                              width="30px"/>
                          </a>
                          <div class="media-body mx-2 my-2 info">
                          99% Trip Fullfillment


                          </div>
                        </div>                       
                     </div> 
                    <div className="col-lg-3">hello</div>
                    <div className="col-lg-3">99%</div>

                </div>
            </div>
        </div >
 </Container>
    );
};
