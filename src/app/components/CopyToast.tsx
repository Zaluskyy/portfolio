import React from "react";
import style from "./style/CopyToast.module.scss";
import { motion } from "framer-motion";

interface CopyToastProps {}

const CopyToast: React.FC<CopyToastProps> = () => {
  return (
    <div className={style.CopyToast}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5 }}
          x="6.97223"
          y="4.97223"
          width="10.7778"
          height="15.1944"
          rx="2.5"
          stroke="#D5734F"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5 }}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.004 3H9C6.79086 3 5 4.79086 5 7V18.1944V18.7155L6 17.1446V7C6 5.34314 7.34315 4 9 4H14.3674L15.004 3Z"
          fill="#D5734F"
        />
      </svg>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Copied
      </motion.span>
    </div>
  );
};

export default CopyToast;
