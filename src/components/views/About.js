import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
  useEffect(()=>{
    Aos.init({duration : 1000})
  },[])
    return (
        <main>
            <div className="about1">
                <span className="left" data-aos="fade-up">
                    <h1>About us</h1>
                    <p>We want to build a financial inclusive world with everyone, for everyone.</p>
                </span>
                
                <span className="right">
                    <img src="/tech.jpg" alt="" height="700"/>
                </span>
            </div>

            <div className="about2">
              <div className="abt-left" data-aos="fade-right">
                <div className="left-item">
                  <img src="/g1.jfif" alt="" />
                </div>
                <div className="left-item">
                  <img src="/g2.jpg" alt="" />
                </div>
                <div className="left-item">
                  <img src="/g3.jpg" alt="" />
                </div>
                <div className="left-item">
                  <img src="/g4.jfif" alt="" />
                </div>
                <div className="left-item">
                  <img src="/g5.jpg" alt="" />
                </div>
                <div className="left-item">
                  <img src="/g6.jpg" alt="" />
                </div>
              </div>
              <div className="abt-right" data-aos="fade-down">
                <h1>Our Story</h1>
                <p>
                AfriPay was founded in 2019 by a team of ex-finance experts, entrepreneurs and engineers.
                 We decided to provide the award-winning technology core needed to provide businesses 
                 all around the world a powerful, reliable and intelligent payments gateway.
                </p>

                <h1>Our core values</h1>
                <p>
                As a company, we have 5 core values that every member of the team lives 
                by, in everything we do. It’s what defines who we are as an organisation.
                <ul>
                  <li>We are customer focused.</li>
                  <li>We build trust capital.</li>
                  <li>We are loyal to one another.</li>
                  <li>We communicate respectfully</li>
                  <li>We create and innovate.</li>
                </ul>
                </p>

                <h1>Our Mission</h1>
                <p>
                    Afripay's mission is to simplify payments for endless possibilities.
                </p>

                <h1>Our Vision</h1>
                <p>
                    AfriPay’s vision is to make it easier for Africans 
                    to build global businesses that can make and accept any 
                    payment, anywhere from across Africa and around the world.                
                </p>
                
              </div>
            </div>
        </main>
    )
}

export default About
