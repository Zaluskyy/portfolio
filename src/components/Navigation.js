import React, {useState} from 'react';
import '../style/navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNav =()=>{
        setIsOpen(prev=>!prev)
    }

    const buttonClass = isOpen?"buttonAnimation":null;
    const ulClass = isOpen?"ulAnimation":null;

    const handleGoTo =(num)=>{
        window.scrollTo({
            top: window.innerHeight*num,
            behavior: "smooth"
        })
        if(window.innerWidth<650){
            setIsOpen(prev=>!prev)
        }
    }

    return (
        <div className="navigation">
            <ul className={ulClass}>
                <li onClick={()=>handleGoTo(0)}>Home</li>
                <li onClick={()=>handleGoTo(1)}>About</li>
                <li onClick={()=>handleGoTo(2)}>Skills</li>
                <li onClick={()=>handleGoTo(3)}>Projects</li>
                <li onClick={()=>handleGoTo(4)}>Contact</li>
            </ul>
            <button
            className={buttonClass}
            onClick={handleOpenNav}
            >
                {isOpen?<FontAwesomeIcon icon={faTimes} style={{fontSize:"19px"}}/>:<FontAwesomeIcon icon={faBars}/>}
            </button>
        </div>
    );
}
 
export default Navigation;