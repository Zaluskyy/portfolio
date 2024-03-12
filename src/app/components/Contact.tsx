"use client";
import React, { useEffect, useRef } from "react";
import style from "./style/Contact.module.scss";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

import callIcon from "../../../public/icon/call.svg";
import mailIcon from "../../../public/icon/mail.svg";
import instagramIcon from "../../../public/icon/instagram.svg";
import linkedinIcon from "../../../public/icon/linkedinOrange.svg";
import copyIcon from "../../../public/icon/copy.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import CopyToast from "./CopyToast";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const contactRef = useRef(null);

  const isInView = useInView(contactRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("animate");
  }, [isInView]);

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

  const contactVariant = {
    initial: {
      opacity: 0,
      x: 500,
      scale: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 0.3,
        delay: 0.2 * index + 0.2,
      },
    }),
  };

  const contactButtons = contactArr.map((item, index) => {
    if (item.copy) {
      return (
        <motion.div
          variants={contactVariant}
          initial="initial"
          animate={mainControls}
          custom={index}
          key={item.content}
          className={style.buttonWithCopyContainer}
        >
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
          <CopyToClipboard
            text="kryzal77@gmail.com"
            onCopy={() =>
              toast.custom(() => {
                return <CopyToast />;
              })
            }
          >
            <div className={style.copyContainer}>
              <Image src={copyIcon} alt="copy" />
            </div>
          </CopyToClipboard>
        </motion.div>
      );
    } else if (item.name) {
      return (
        <motion.a
          variants={contactVariant}
          initial="initial"
          animate={mainControls}
          custom={index}
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
        </motion.a>
      );
    } else {
      return (
        <motion.a
          variants={contactVariant}
          initial="initial"
          animate={mainControls}
          custom={index}
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
        </motion.a>
      );
    }
  });

  const h2Variant = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, type: "spring", damping: 12 },
    },
  };

  return (
    <div className={style.Contact}>
      <motion.h2 variants={h2Variant} initial="initial" animate={mainControls}>
        Contact
      </motion.h2>

      <div ref={contactRef} className={style.container}>
        {contactButtons}
      </div>
    </div>
  );
};

export default Contact;
