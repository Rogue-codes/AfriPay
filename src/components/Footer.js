import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="foot">
                <ul>
                    <h1>Resources</h1>
                    <li><Link>Cash Insurance</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Cookie Statement</Link></li>
                    <li><Link>Terms & Conditiions</Link></li>
                    <li><Link>Third Party Term Of Use</Link></li>
                    <li><Link>Covid 19</Link></li>
                    <li><Link>FAQ</Link></li>
                </ul>
                <ul>
                    <h1>Our Products</h1>
                    <li><Link>AfriPay ChatBox</Link></li>
                    <li><Link>Savings</Link></li>
                    <li><Link>Market Place</Link></li>
                </ul>
                <ul>
                    <h1>Nigeria</h1>
                    <li>19b Bosun Adekoya Street, Lekki Phase 1, Lagos, <br /> Nigeria. 01 888 5008</li>
                    <p>Support@AfriPay.Co</p>
                </ul>
                <ul>
                    <h1>United States</h1>
                    <li>1776 Sacremento St Apt 311 <br /> SAN Francisco CA 94109</li>
                    <span>
                        <img src="/facebook_24px.png" alt=""/>
                        <img src="/twitter_26px.png" alt="" />
                        <img src="/linkedin_24px.png" alt="" />
                        <img src="/instagram_24px.png" alt="" />
                    </span>
                </ul>
            </div>
        </>
    )
}

export default Footer
