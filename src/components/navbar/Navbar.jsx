import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { motion } from "framer-motion";

const Menu = () => (
  <motion.div
    initial={{ opacity: 0, y: "0%" }}
    animate={{ opacity: 1, y: "2%" }}
    transition={{ delay: ".25" }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <p>
        <a href="#home">Home</a>
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.75 }}
    >
      <p>
        <a href="#possibility">Open AI</a>
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p>
        <a href="#features">Case Studies</a>
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.25 }}
    >
      <p>
        <a href="#blog">Library</a>
      </p>
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open Ai</a>
          </p>
          <p>
            <a href="#features">Case Study</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <motion.div
            className="gpt3__navbar-menu_container "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ".75", ease: "easeInOut" }}
          >
            <Menu />
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button"> Sign up </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
