import React from 'react';
import '../style/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const contacts = [
    {
        name: "phone number",
        icon: faPhoneAlt,
        content: "+48 537 728 008"
    },
    {
        name: "email",
        icon: faEnvelope,
        content: "kryzal77@gmail.com"
    },
    {
        name: "email",
        icon: faEnvelope,
        content: "kryzal77@gmail.com"
    },
    {
        name: "email",
        icon: faEnvelope,
        content: "kryzal77@gmail.com"
    },
    {
        name: "email",
        icon: faEnvelope,
        content: "kryzal77@gmail.com"
    },
    {
        name: "email",
        icon: faEnvelope,
        content: "kryzal77@gmail.com"
    },
]

const Contact = () => {

    const contactBlocks = contacts.map((item, index)=>{
        return (
            <div className="contactBlock" key={index}>
                <div className="content">
                    <span className="name">{item.name}:</span>
                    <span className="this">{item.content}</span>
                </div>
                <div className="iconPlace">
                    <FontAwesomeIcon className="icon" icon={item.icon} size="8x"/>
                </div>
            </div>
        )
    })

    return ( 
        <div className="contact">
            <h1>Contact</h1>
            {contactBlocks}
        </div>
     );
}
 
export default Contact;