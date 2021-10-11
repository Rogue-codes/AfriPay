import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import { useTransition, animated } from 'react-spring'




const Nav = () => {
    const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)"},
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

    
  


    return (
        <div className="nav">
            <span>
                <img src="/coinsB_32px.png" alt="img" height="50" width="50"/><Link to="/" className="afri">AfriPay</Link>
            </span>
            <ul>              
            
            <l1>
                <Link to="/about">About us</Link>
            </l1>

            <l1>
                <Link to="/">Stories</Link>
            </l1>

            <l1>
                <Link to="/">Careers</Link>
            </l1>

            <l1>
                <Link to="/">FAQ</Link>
            </l1>   
            </ul>

            <span className="icon">
                <FontAwesomeIcon icon={faBars}
                onClick= {() => setShowMenu(!showMenu)}/>
            </span>

            {
                 maskTransitions(
                    (styles, item) => item && <animated.div style={styles} className="firstAnimate" onClick = {()=> setShowMenu(false)}>
            
                    </animated.div>
                  )
            }
            
            {
                 menuTransitions(
                    (styles, item) => item && <animated.div style={styles} className="animate">
            <span>
                <img src="/coins_32px.png" alt="img" height="50" width="50"/>AfriPay 
            </span>
            <li>
                <Link to="/" onClick = {()=> setShowMenu(false)}>
                  Home
                </Link> 
            </li>

            <li>
                <Link to="/about" onClick = {()=> setShowMenu(false)}>
                  About Us
                </Link>
            </li>

            <li>
                <Link to="/" onClick = {()=> setShowMenu(false)}>
                  Stories
                </Link>
            </li>

            <li>
                <Link to="/" onClick = {()=> setShowMenu(false)}>
                  Careers
                </Link>
            </li>

            <li>
                <Link to="/" onClick = {()=> setShowMenu(false)}>
                  FAQ
                </Link>
            </li>
            </animated.div>
                  )
            }


        </div>
    )
}

export default Nav
 