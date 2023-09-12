import "./About.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">About Me 👩‍💻👩🏽‍⚕️ </h2>
      <motion.div className="app__about-container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <p className="p-text desc">
 
            As a former nurse, my journey has been driven by a strong desire to
            help people. My path has taken an exciting turn as I discovered the
            power of technology in creating positive impact during my time in
            healthcare. Working in a cardiac surgery and intensive care unit,
            technology became an integral part of my daily work. It encompassed
            everything from medical record software to life-support devices and
            monitoring systems, and I found myself deeply drawn to the technical
            aspects of my work. Now, <span>I envision using programming as a means to
            make a positive impact in the larger communities.</span>
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
        >
          <p className="p-text desc">
      
            My background in molecular biology and research, coupled with
            nursing, has taught me to balance the <span>data-driven problem-solving </span>
            aspects with the human side of things such as <span>collaboration and
            compassion. </span>My professional experience has shaped me to develop the
            persistence to tackle complex challenges and unexpected events. I
            aspire to deliver  <span>holistic, human-centered</span> solutions.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
        >
          <p className="p-text desc">
            {" "}
            My hobbies & Interests: Hiking, Tennis, Reading, Journaling, Piano,
            Animals, Miniatures
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AppWrap(About, "about", "about");
