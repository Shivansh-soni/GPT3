import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";
import { motion } from "framer-motion";

const Brand = () => (
  <motion.div
    className="gpt3__brand section__padding"
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: "0%" }}
    // whileInView={{ opacity: 1, x: "0%" }}
    transition={{ duration: "1.5", ease: "easeInOut" }}
  >
    <div>
      <img src={google} alt="logo" />
    </div>
    <div>
      <img src={slack} alt="logo" />
    </div>
    <div>
      <img src={atlassian} alt="logo" />
    </div>
    <div>
      <img src={dropbox} alt="logo" />
    </div>
    <div>
      <img src={shopify} alt="logo" />
    </div>
  </motion.div>
);

export default Brand;
