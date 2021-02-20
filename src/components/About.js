import React from 'react';
import '../style/about.css';
import me from '../img/me.jpg';
import { useState } from 'react/cjs/react.development';

const About = () => {
    
    const vh = () => window.innerHeight;

    const [appeared, setAppeared] = useState(false)
    
    let appearText = appeared?"appearText":null;
    let animateImg = appeared?"animateImg":null;

    
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>=vh()/2){
            setAppeared(true)
        }
    })
    

    return (
        <div className="about">
            <img src={me} alt="me" className={animateImg} />
            <div className={appearText} >
                <font className="title">
                    About me
                </font><br/>
                <font >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </font>
            </div>
        </div>
    );
}
 
export default About;