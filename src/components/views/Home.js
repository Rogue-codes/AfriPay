import React, {useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { init } from 'ityped'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration : 1000})
    },[])

    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current,
             { showCursor: true,
                backSpeed:  40,
                backDelay:  1500,
                strings: ["Best payment Platform in Africa"] })

    },[])
    return (
        <>
        <div className="firstCont">
            <span>
                <h1>Providing Affordable Financial Services</h1>
                <p>As an AfriPay Agent you can provide financial services in your local community and make money while at it.</p>
                <Link to="/">Download the App</Link>
            </span>

            <span>
                <img src="/fif.gif" alt=""/>
            </span>

        </div>
        
        <div  className="secondCont">
            <div className="flex1">
                <h1>
                Why you should be an<br/> <span>Agent on AfriPay</span>
                </h1>
            </div>
            <div className="flex2">
                <span data-aos="fade-up">
                    <h2>Reliable service.</h2>
                    <p>We understand the importance of reliability and we are proud to offer Agents the most reliable service.</p>
                    <img src="/money_bag_100px.png" alt="" height="100" width="100" />
                </span>
                
                <span data-aos="fade-up">
                    <h2>Instant settlements.</h2>
                    <p>We provide instant settlement to our Agents after every transaction they do on our platform.</p>
                    <img src="/total_sales_80px.png" alt=""/>
                </span>
                
                <span data-aos="fade-down">
                    <h2>Insurance.</h2>
                    <p>You are protected by the AfriPay Cash Insurance Plan so you never need to worry about losing your money.</p>
                    <img src="/insert_mastercard_100px.png" alt="" height="100" width="100" />
                </span>
                
                <span data-aos="fade-down">
                    <h2>Back-up funds.</h2>
                    <p>You will never have to worry about running out of funds to run your business with AfriPay Back-up Funds. We have got you here!</p>

                    <img src="/finance_document_100px.png" alt="" height="100" width="100" />
                </span>
            </div>
                
        </div>

        <div className="thirdCont">
            <span>
                <h1 ref={textRef}>

                </h1>
            </span>
        </div>
        <div className="fourthCont" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1>
               <span>Explore our</span> <br /> product offerings
            </h1>
        </div>

        <div className="fifthCont">
            <span>
                <h1>Money Transfer</h1>
                <p>Make money by helping people around you transfer cash to their loved ones and business associates. Quick transactions, great profits!</p>       
            </span>

            <span>
                <img src="/card-phone-img.png" alt="" />
            </span>
        </div>

        <div className="sixthCont">
            <span id = "whyte" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h1>Add Money, Make Transfers, Pay Bills</h1>
                <p>
                    Live your life on your terms and without limits. With an
                    AfriPay account, you can add money to your wallet for free,
                    within seconds and start making transfers to other wallets
                    or any bank accounts for free.* Take control of how you
                    make your bill and utility payments.
                </p>       
            </span>

            <span data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src="/agent.jpg" alt="" />
            </span>
        </div>

        <div className="seventhCont">
            <span>
                <img src="/Collect-Payments-for-Multiple-Channels-1.1.gif" height="750"  alt="" />
            </span>

            <span id = "pyte" data-aos="fade-up">
                <h1>Delight customers with a <br /> seamless payments <br /> experience</h1>
                <p>
                    Live your life on your terms and without limits. With an <br />
                    AfriPay account, you can add money to your wallet for free, <br />
                    within seconds and start making transfers to other wallets <br />
                    or any bank accounts for free.* Take control of how you <br />
                    make your bill and utility payments.
                </p>       
            </span>
        </div>

        <div className="eightCont">
            <h1>With AfriPay, you can be <br /> sure of <span>2 things</span></h1>
        </div>

        <div className="nineCont">
            <span data-aos="flip-left">
                <img src="/increase_profits_64px.png" alt="" height="50" width="50"/>
                <h1>Ease</h1>
                <p>In partnership with our Agents, we are <br /> making it easier to withdraw money, send  money and make bill payments even in the most remote areas.</p>
            </span>
                
            <span data-aos="flip-right">
                <img src="/quick_mode_on_80px.png" alt="" height="50" width="50"/>
                <h1>Speed</h1>
                <p>
                Speed is everything when it comes to <br /> making payments, you can complete a <br /> transaction in a minute or less on AfriPay at any of our Agent Points.
                </p>
            </span>
        </div>
        <div className="tenthCont" data-aos="fade-up">
            <span><h1>We are trusted by millions of people every day to send money, get cash and make bill payments across Africa.</h1></span>
            <span>
                <Link to="/">Get Started</Link>
            </span>
        </div>

        <div className="eleventhCont">
            <span>
                <img src="/save-PHONE-min.png" height="700" width="400"  alt="" />
            </span>

            <span>
                <h1>Become an Agent in 3 simple steps</h1>
                <p>
                    <li> Download the AfriPay App </li> 
                    <li>Create an Account in a few minutes</li>
                    <li> Fund your wallet and start transacting Download the AfriPay App</li>               
                </p>  
                <Link className="play"><img src="/playstore.png" alt="" /></Link>     
            </span>
        </div>

        <div className="partners">
            <h1>
            What our partners think about us.
            </h1> <br /><br />

            <div className="logos">
            <span>
                <img src="/download (3).png" alt="" />
            </span>

            <span>
                <img src="/download (2).png" alt="" />
            </span>

            <span>
                <img src="/download3.png" alt="" />
            </span>
        </div>
        </div>

        

        <div className="twelveCont">
            <div className="pic1">
                <span>
                    <img src="/min1.png" alt="" width='120' height="120"/>
                </span>
                <span>
                    <h1>Lorem ipsum dolor</h1>
                    <h2>CEO Unified Tech</h2>
                </span>

                <p>
                The AfriPay team has an ear to the ground that allows them to understand what 
                their users and customers most need, such that their product is second to none 
                in delivering what users need and making a real dent in financial inclusion
                </p>
            </div>

            <div className="pic1">
                <span>
                    <img src="/min2.jpg" alt="" width='120' height="120"/>
                </span>
                <span>
                    <h1>Lorem ipsum dolor</h1>
                    <h2>Founder VPD Platform</h2>
                </span>

                <p>
                Agent networks are the backbone of African digitization as they offer an effective way 
                of distributing digital services. The AfriPay team has built an excellent product that their 
                agents love to use. As a result, AfriPay has demonstrated impressive growth since its inception.
                </p>
            </div>

            <div className="pic1">
                <span>
                    <img src="/min3.jpg" alt="" width='120' height="120"/>
                </span>
                <span>
                    <h1>Lorem ipsum dolor</h1>
                    <h2>General Partner at Jetins CO.</h2>
                </span>

                <p>
                For an economy that largely depends on cash, the growth of digital payments in Nigeria 
                will be accelerated by AfriPay as they provide a gateway between cash and digital, and we 
                think that's a huge opportunity.
                </p>
            </div>
        </div>
        </>
    )
}

export default Home
