import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Import header component from homepage
import Footer from "./Footer"; // Import footer component from homepage

const About = (props) => {

  return (
    <>
      <Header /> {/* Include header component */}

      <div className="About">
  <div className="container">
    <div className="row">
      <div className="col-md-8 m-auto">
      <h1 className="display-4 text-center beautiful-heading">About NSS</h1>
        <p className="lead text-center">
          Welcome to our website. Here's a little bit about NSS and what we do.
        </p>
        <p align="left" >
        The National Service Scheme (NSS) is a flagship youth-focused program initiated by the 
        Government of India under the Ministry of Youth Affairs and Sports. Founded in 1969, the 
        NSS aims to instill the spirit of community service and social responsibility among young 
        people through voluntary participation in various nation-building activities. With a vision 
        to develop a sense of empathy and solidarity towards marginalized sections of society, NSS
         engages millions of students across the country in 
        diverse projects ranging from environmental conservation to literacy campaigns, healthcare initiatives, and disaster management.
        </p>
        <p align="left" >
        At its core, NSS emphasizes the holistic development of participants by fostering leadership 
        qualities, interpersonal skills, and a deeper understanding of societal issues. Through active engagement 
        in community service projects, NSS volunteers not only contribute to the welfare of society but also undergo 
        transformative personal experiences that shape their character and worldview. By working hand-in-hand with local 
        communities and NGOs, NSS enables students to leverage their knowledge 
        and skills for the greater good, thereby nurturing responsible citizenship and civic engagement among the youth.
        </p>
        <p align="left" >
        Over the decades, NSS has emerged as a vital platform for youth empowerment and social change, 
        touching the lives of millions of individuals and communities across India. With its motto "Not me, but you",
         NSS embodies the spirit of selfless service and collective action, inspiring generations of young people to
          become agents of positive change in society. As a dynamic force for social transformation, NSS continues to play a pivotal role in 
        promoting inclusive development, fostering national unity, and building a brighter future for generations to come.
        </p>
      </div>
    </div>
  </div>
</div>


      <Footer /> {/* Include footer component */}
    </>
  );
};

export default About;
