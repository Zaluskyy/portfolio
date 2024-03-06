"use client";
import React from "react";
import style from "./style/Contact.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

import callIcon from "../../../public/icon/call.svg";
import mailIcon from "../../../public/icon/mail.svg";
import instagramIcon from "../../../public/icon/instagram.svg";
import linkedinIcon from "../../../public/icon/linkedinOrange.svg";
import copyIcon from "../../../public/icon/copy.svg";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  interface IcontactArr {
    name?: string;
    content: string;
    icon: any;
    copy?: boolean;
    href: string;
  }

  const contactArr: IcontactArr[] = [
    {
      name: "Mail",
      content: "kryzal77@gmail.com",
      icon: mailIcon,
      copy: true,
      href: "mailto: kryzal77@gmail.com",
    },
    {
      name: "Call",
      content: "+48 537 728 008",
      icon: callIcon,
      href: "tel: +48 537 728 008",
    },
    {
      content: "LinkedIn",
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/krystian-zaluski",
    },
    {
      content: "Instagram",
      icon: instagramIcon,
      href: "https://www.instagram.com/kryzal77/",
    },
  ];

  const contactButtons = contactArr.map((item) => {
    if (item.copy) {
      return (
        <div key={item.content} className={style.buttonWithCopyContainer}>
          <a href={item.href} target="_blank" className={style.button}>
            <div className={style.left}>
              <Image
                src={item.icon}
                alt={item.name ? item.name : item.content}
              />
            </div>
            <div className={style.right}>
              <span className={style.name}>{item.name}</span>
              <span className={style.content}>{item.content}</span>
            </div>
          </a>
          <div className={style.copyContainer}>
            <Image src={copyIcon} alt="copy" />
          </div>
        </div>
      );
    } else if (item.name) {
      return (
        <a
          key={item.content}
          href={item.href}
          target="_blank"
          className={style.button}
        >
          <div className={style.left}>
            <Image src={item.icon} alt={item.name ? item.name : item.content} />
          </div>
          <div className={style.right}>
            <span className={style.name}>{item.name}</span>
            <span className={style.content}>{item.content}</span>
          </div>
        </a>
      );
    } else {
      return (
        <a
          key={item.content}
          href={item.href}
          target="_blank"
          className={style.button}
        >
          <div className={style.left}>
            <Image src={item.icon} alt={item.name ? item.name : item.content} />
          </div>
          <div className={`${style.right} ${style.rightCenter}`}>
            <span className={style.content}>{item.content}</span>
          </div>
        </a>
      );
    }
  });

  return (
    <div className={style.Contact}>
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, type: "spring", damping: 12 }}
      >
        Contact
      </motion.h2>

      <div className={style.container}>{contactButtons}</div>
    </div>
  );
};

export default Contact;
